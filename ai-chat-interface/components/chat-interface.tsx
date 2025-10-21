"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Import template markdown files
import template1 from "@/data/template1.md";
import template2 from "@/data/template2.md";
import template3 from "@/data/template3.md";

// Import HTML template
import w9FormTemplate from "@/data/w9-form-template.html";
//accredited-investor.mock.html
import accreditedInvestorMock from "@/data/accredited-investor.mock.html";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function ChatInterface() {
  const { user, isLoaded } = useUser();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost:3141/agents/Supervisor/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            input: userMessage.content,
            options: {
              userId: user?.id || "anonymous",
              resourceId: `conversation-${user?.id || "anonymous"}`,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      // Handle streaming response (Server-Sent Events)
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantContent = "";

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6);
              if (data === "[DONE]") continue;

              try {
                const parsed = JSON.parse(data);
                if (parsed.type === "text-delta" && parsed.delta) {
                  assistantContent += parsed.delta;
                  // Update message in real-time
                  setMessages([
                    ...newMessages,
                    { role: "assistant", content: assistantContent },
                  ]);
                }
              } catch (e) {
                // Ignore parse errors for non-JSON lines
              }
            }
          }
        }
      }

      // Final update
      if (assistantContent) {
        setMessages([
          ...newMessages,
          { role: "assistant", content: assistantContent },
        ]);
      } else {
        throw new Error("No response received");
      }
    } catch (error) {
      console.error("[v0] Error sending message:", error);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Show loading state while Clerk is initializing
  if (!isLoaded) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col bg-background">
      {/* Messages Area */}
      <ScrollArea className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-8">
          {messages.length === 0 ? (
            <div className="flex h-[60vh] flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mb-2 text-2xl font-semibold text-foreground">
                How can I help you today
                {user?.firstName ? `, ${user.firstName}` : ""}?
              </h2>
              <p className="text-muted-foreground">
                Ask me anything or try asking about the weather
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((message, index) => (
                <MessageBubble key={index} message={message} user={user} />
              ))}
              {isLoading && <TypingIndicator />}
            </div>
          )}
          <div ref={scrollRef} />
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 py-4">
          <form onSubmit={handleSubmit} className="relative">
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Message Compliance IQ..."
              className="min-h-[52px] max-h-[200px] resize-none rounded-2xl border-input bg-background pr-12 text-base shadow-sm focus-visible:ring-1"
              rows={1}
            />
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim() || isLoading}
              className="absolute bottom-2 right-2 h-8 w-8 rounded-lg"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Compliance IQ can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  );
}

// Typing animation component for markdown content
function TypingMarkdown({ content }: { content: string }) {
  const [displayedContent, setDisplayedContent] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 15; // Fast typing speed (10-20ms per character)

    const timer = setInterval(() => {
      if (currentIndex < content.length) {
        setDisplayedContent(content.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [content]);

  return (
    <div className="prose prose-sm dark:prose-invert max-w-none text-sm">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-lg font-bold mb-2 mt-4 first:mt-0" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="text-base font-bold mb-2 mt-3 first:mt-0"
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className="text-sm font-semibold mb-1 mt-2 first:mt-0"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p className="mb-2 last:mb-0 leading-relaxed" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc ml-4 mb-2 space-y-1" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal ml-4 mb-2 space-y-1" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="leading-relaxed" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-semibold" {...props} />
          ),
          code: ({ node, inline, className, children, ...props }: any) =>
            inline ? (
              <code
                className="bg-primary/10 dark:bg-primary/20 px-1 py-0.5 rounded text-xs font-mono"
                {...props}
              >
                {children}
              </code>
            ) : (
              <code
                className="block bg-primary/10 dark:bg-primary/20 p-2 rounded mb-2 text-xs font-mono overflow-x-auto"
                {...props}
              >
                {children}
              </code>
            ),
        }}
      >
        {displayedContent}
      </ReactMarkdown>
      {!isComplete && (
        <span className="inline-block w-1 h-4 bg-foreground animate-pulse ml-0.5" />
      )}
    </div>
  );
}

// Template modal component
function TemplateModal({
  isOpen,
  onClose,
  title,
  content,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=" overflow-y-auto" size="fullscreen">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <TypingMarkdown content={content} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Function to inject mock data into W9 form
function injectMockDataIntoW9(htmlContent: string): string {
  let modifiedHtml = htmlContent;

  // Get current date in YYYY-MM-DD format
  const currentDate = new Date().toISOString().split("T")[0];

  // Inject values into form fields using value attribute
  const injections = [
    // Legal name
    { id: "legal_name", value: "John Michael Smith" },
    // Business name
    { id: "business_name", value: "Smith Consulting LLC" },
    // Address
    { id: "address", value: "1234 Main Street, Suite 100" },
    // City, state, ZIP
    { id: "city_state_zip", value: "New York, NY 10001" },
    // Account numbers
    { id: "account_numbers", value: "ACC-2024-001" },
    // SSN (leave blank for privacy)
    { id: "ssn", value: "123-45-6789" },
    // EIN (alternative)
    { id: "ein", value: "" },
    // Signature
    { id: "signature", value: "John Michael Smith" },
    // Date
    { id: "signature_date", value: currentDate },
    // LLC classification
    { name: "llc_classification", value: "S" },
  ];

  // Inject values into inputs
  injections.forEach(({ id, name, value }) => {
    if (id) {
      // Match input with specific id and add value attribute
      const regex = new RegExp(`(<input[^>]*id="${id}"[^>]*)(>)`, "gi");
      modifiedHtml = modifiedHtml.replace(regex, (match, before, after) => {
        // Remove any existing value attribute first
        let cleaned = before.replace(/\s*value="[^"]*"/gi, "");
        return `${cleaned} value="${value}"${after}`;
      });
    }
    if (name) {
      // Match input with specific name and add value attribute
      const regex = new RegExp(`(<input[^>]*name="${name}"[^>]*)(>)`, "gi");
      modifiedHtml = modifiedHtml.replace(regex, (match, before, after) => {
        // Remove any existing value attribute first
        let cleaned = before.replace(/\s*value="[^"]*"/gi, "");
        return `${cleaned} value="${value}"${after}`;
      });
    }
  });

  // Check the LLC checkbox
  modifiedHtml = modifiedHtml.replace(
    /(<input[^>]*name="tax_class"[^>]*value="llc"[^>]*)(>)/gi,
    "$1 checked$2"
  );

  return modifiedHtml;
}

// HTML modal component for W9 form
function HtmlModal({
  isOpen,
  onClose,
  title,
  htmlContent,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  htmlContent: string;
}) {
  // Inject mock data into the W9 form
  const populatedHtml = injectMockDataIntoW9(htmlContent);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] h-[95vh] overflow-y-auto p-0 max-w-none">
        <div
          className="p-6"
          dangerouslySetInnerHTML={{ __html: populatedHtml }}
        />
      </DialogContent>
    </Dialog>
  );
}

function MessageBubble({ message, user }: { message: Message; user: any }) {
  const isUser = message.role === "user";
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    content: string;
  }>({ isOpen: false, title: "", content: "" });

  const [htmlModalState, setHtmlModalState] = useState<{
    isOpen: boolean;
    title: string;
    htmlContent: string;
  }>({ isOpen: false, title: "", htmlContent: "" });

  const templates = [
    { title: "Template 1", content: template1 },
    { title: "Template 2", content: template2 },
    { title: "Template 3", content: template3 },
  ];

  const openTemplate = (index: number) => {
    setModalState({
      isOpen: true,
      title: templates[index].title,
      content: templates[index].content,
    });
  };

  const openW9Form = () => {
    setHtmlModalState({
      isOpen: true,
      title: "Form W-9",
      htmlContent: w9FormTemplate,
    });
  };

  const openAccreditedInvestorForm = () => {
    setHtmlModalState({
      isOpen: true,
      title: "Accredited Investor Form",
      htmlContent: accreditedInvestorMock,
    });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, title: "", content: "" });
  };

  const closeHtmlModal = () => {
    setHtmlModalState({ isOpen: false, title: "", htmlContent: "" });
  };

  return (
    <>
      <div
        className={cn(
          "flex gap-3 text-pretty",
          isUser ? "justify-end" : "justify-start"
        )}
      >
        {!isUser && (
          <Avatar className="h-8 w-8 shrink-0 border border-border">
            <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-xs font-semibold text-primary">
              AI
            </AvatarFallback>
          </Avatar>
        )}
        <div className="flex flex-col gap-2 max-w-[80%]">
          <div
            className={cn(
              "rounded-2xl px-4 py-3 shadow-sm",
              isUser
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground"
            )}
          >
            {isUser ? (
              <p className="whitespace-pre-wrap text-sm leading-relaxed">
                {message.content}
              </p>
            ) : (
              <div className="prose prose-sm dark:prose-invert max-w-none text-sm">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ node, ...props }) => (
                      <h1
                        className="text-lg font-bold mb-2 mt-4 first:mt-0"
                        {...props}
                      />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2
                        className="text-base font-bold mb-2 mt-3 first:mt-0"
                        {...props}
                      />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3
                        className="text-sm font-semibold mb-1 mt-2 first:mt-0"
                        {...props}
                      />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul
                        className="list-disc ml-4 mb-2 space-y-1"
                        {...props}
                      />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol
                        className="list-decimal ml-4 mb-2 space-y-1"
                        {...props}
                      />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="leading-relaxed" {...props} />
                    ),
                    p: ({ node, ...props }) => (
                      <p
                        className="mb-2 last:mb-0 leading-relaxed"
                        {...props}
                      />
                    ),
                    code: ({
                      node,
                      inline,
                      className,
                      children,
                      ...props
                    }: any) =>
                      inline ? (
                        <code
                          className="bg-primary/10 dark:bg-primary/20 px-1 py-0.5 rounded text-xs font-mono"
                          {...props}
                        >
                          {children}
                        </code>
                      ) : (
                        <code
                          className="block bg-primary/10 dark:bg-primary/20 p-2 rounded mb-2 text-xs font-mono overflow-x-auto"
                          {...props}
                        >
                          {children}
                        </code>
                      ),
                    pre: ({ node, ...props }) => (
                      <pre className="mb-2 overflow-x-auto" {...props} />
                    ),
                    a: ({ node, ...props }) => (
                      <a
                        className="text-primary underline underline-offset-2 hover:text-primary/80"
                        target="_blank"
                        rel="noopener noreferrer"
                        {...props}
                      />
                    ),
                    strong: ({ node, ...props }) => (
                      <strong className="font-semibold" {...props} />
                    ),
                    em: ({ node, ...props }) => (
                      <em className="italic" {...props} />
                    ),
                    blockquote: ({ node, ...props }) => (
                      <blockquote
                        className="border-l-2 border-primary/50 pl-3 italic my-2"
                        {...props}
                      />
                    ),
                    table: ({ node, ...props }) => (
                      <div className="overflow-x-auto my-2">
                        <table
                          className="min-w-full divide-y divide-border"
                          {...props}
                        />
                      </div>
                    ),
                    th: ({ node, ...props }) => (
                      <th
                        className="px-2 py-1 text-left font-semibold"
                        {...props}
                      />
                    ),
                    td: ({ node, ...props }) => (
                      <td
                        className="px-2 py-1 border-t border-border"
                        {...props}
                      />
                    ),
                  }}
                >
                  {message.content}
                </ReactMarkdown>
              </div>
            )}
          </div>

          {/* Reply chips for assistant messages */}
          {!isUser && (
            <div className="flex gap-2 ml-0 flex-wrap">
              <Button
                variant="outline"
                size="sm"
                onClick={openAccreditedInvestorForm}
                className="h-7 rounded-full text-xs bg-background hover:bg-muted transition-colors"
              >
                Accredited Investor Form
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={openW9Form}
                className="h-7 rounded-full text-xs bg-background hover:bg-muted transition-colors"
              >
                W9
              </Button>
            </div>
          )}
        </div>

        {isUser && (
          <Avatar className="h-8 w-8 shrink-0 border border-border">
            <AvatarImage
              src={user?.imageUrl || "/placeholder.svg"}
              alt={user?.firstName || "User"}
            />
            <AvatarFallback className="bg-secondary text-xs font-semibold text-secondary-foreground">
              {user?.firstName?.[0] || user?.username?.[0] || "U"}
            </AvatarFallback>
          </Avatar>
        )}
      </div>

      {/* Template Modal */}
      <TemplateModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        content={modalState.content}
      />

      {/* HTML Modal for W9 Form */}
      <HtmlModal
        isOpen={htmlModalState.isOpen}
        onClose={closeHtmlModal}
        title={htmlModalState.title}
        htmlContent={htmlModalState.htmlContent}
      />
    </>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-3">
      <Avatar className="h-8 w-8 shrink-0 border border-border">
        <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-xs font-semibold text-primary">
          AI
        </AvatarFallback>
      </Avatar>
      <div className="max-w-[80%] rounded-2xl bg-muted px-4 py-3 shadow-sm">
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:-0.3s]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:-0.15s]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60" />
        </div>
      </div>
    </div>
  );
}
