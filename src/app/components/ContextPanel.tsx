import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ContextPanelProps {
  isOpen: boolean;
  onClose: () => void;
  content: any;
}

export function ContextPanel({ isOpen, onClose, content }: ContextPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="context-panel w-96 border-l border-border bg-background overflow-auto"
        >
          <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between">
            <h3 className="font-semibold">Details</h3>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-md hover:bg-accent flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4">
            {content ? (
              <div className="space-y-4">
                {content.title && (
                  <div>
                    <h2 className="text-xl mb-2">{content.title}</h2>
                    {content.description && (
                      <p className="text-sm text-muted-foreground">{content.description}</p>
                    )}
                  </div>
                )}

                {content.location && (
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Location</div>
                    <div className="text-sm">{content.location.name}</div>
                  </div>
                )}

                {content.severity && (
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Severity</div>
                    <div className="text-sm capitalize">{content.severity}</div>
                  </div>
                )}

                {content.sources && (
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Sources</div>
                    <div className="text-sm">{content.sources} verified sources</div>
                  </div>
                )}

                {content.impact && (
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Impact Areas</div>
                    <div className="flex flex-wrap gap-1">
                      {content.impact.map((area: string) => (
                        <span key={area} className="px-2 py-1 rounded text-xs bg-accent">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-sm text-muted-foreground">No content selected</div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
