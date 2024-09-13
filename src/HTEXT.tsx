import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import './TypingAnimation.css';

type Props = {};

const HTEXT: React.FC<Props> = () => {
    const [displayedText, setDisplayedText] = useState('About me');

    useEffect(() => {
        const textWrapper = document.querySelector('.animated-text');
        if (textWrapper) {
            textWrapper.innerHTML = textWrapper.textContent?.replace(/\S/g, "<span class='letter'>$&</span>") || '';

            anime.timeline({ loop: false })
                .add({
                    targets: '.animated-text .letter',
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    duration: 150,
                    delay: (_el, i) => 150 * (i + 1)
                });
        }
    }, [displayedText]);

    return (
        <div className="md:text-[100px] text-[64px] text-black font-montserratalternates cursor-default font-extrabold mb-6">
            <span className="animated-text">{displayedText}</span>
        </div>
    );
};

export default HTEXT;
