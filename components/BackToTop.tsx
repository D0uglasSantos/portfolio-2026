'use client';

import { cn } from '@/lib/utils';
import { useLenis } from 'lenis/react';
import { ArrowUp } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

const BOTTOM_THRESHOLD_PX = 96;
const MIN_SCROLLABLE_PX = 80;

export default function BackToTop() {
    const lenis = useLenis();
    const [visible, setVisible] = useState(false);

    const updateVisibility = useCallback(() => {
        const el = document.documentElement;
        const scrollable = el.scrollHeight - el.clientHeight;
        if (scrollable < MIN_SCROLLABLE_PX) {
            setVisible(false);
            return;
        }
        const distanceFromBottom =
            el.scrollHeight - (window.scrollY + el.clientHeight);
        setVisible(distanceFromBottom <= BOTTOM_THRESHOLD_PX);
    }, []);

    useEffect(() => {
        updateVisibility();
        window.addEventListener('scroll', updateVisibility, { passive: true });
        window.addEventListener('resize', updateVisibility, { passive: true });
        return () => {
            window.removeEventListener('scroll', updateVisibility);
            window.removeEventListener('resize', updateVisibility);
        };
    }, [updateVisibility]);

    const handleClick = () => {
        lenis?.scrollTo(0, {
            duration: 1.4,
        });
    };

    return (
        <button
            type="button"
            aria-label="Voltar ao topo"
            aria-hidden={!visible}
            tabIndex={visible ? 0 : -1}
            onClick={handleClick}
            className={cn(
                'fixed bottom-8 right-5 md:right-10 z-[5] flex size-12 items-center justify-center',
                'rounded-full border border-border bg-background-light/90 text-foreground shadow-lg backdrop-blur-sm',
                'transition-all duration-500 ease-out motion-reduce:transition-opacity motion-reduce:duration-200',
                'hover:border-primary hover:bg-primary hover:text-primary-foreground',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                'group',
                visible
                    ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
                    : 'pointer-events-none translate-y-3 scale-95 opacity-0',
            )}
        >
            <ArrowUp
                className="size-5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 motion-reduce:transition-none"
                strokeWidth={2}
                aria-hidden
            />
        </button>
    );
}
