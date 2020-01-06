---
title: Pricing
tags : ["all", "table", "wip"]
category: "Undefined"
logo: "./thumbnail.jpg"
icon: '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" fill="none"><rect width="260" height="180" fill="var(--color-bg)"></rect><rect x="8" y="40" width="76" height="100" rx="4" fill="var(--color-contrast-lower)"></rect><rect x="92" y="40" width="76" height="100" rx="4" fill="var(--color-bg)" stroke="var(--color-primary)" stroke-width="2"></rect><rect x="101" y="50" width="44" height="8" fill="var(--color-contrast-high)"></rect><rect x="101" y="64" width="58" height="6" fill="var(--color-contrast-low)"></rect><rect x="101" y="74" width="52" height="6" fill="var(--color-contrast-low)"></rect><rect x="101" y="84" width="31" height="6" fill="var(--color-contrast-low)"></rect><rect x="101" y="94" width="52" height="6" fill="var(--color-contrast-low)"></rect><rect x="101" y="114" width="58" height="18" fill="var(--color-primary)"></rect><rect x="119" y="121" width="22" height="4" fill="var(--color-bg)"></rect><rect x="17" y="50" width="44" height="8" fill="var(--color-contrast-high)"></rect><rect x="17" y="64" width="58" height="6" fill="var(--color-contrast-low)"></rect><rect x="17" y="74" width="52" height="6" fill="var(--color-contrast-low)"></rect><rect x="17" y="84" width="31" height="6" fill="var(--color-contrast-low)"></rect><rect x="17" y="94" width="52" height="6" fill="var(--color-contrast-low)"></rect><rect x="17" y="114" width="58" height="18" fill="var(--color-contrast-medium)"></rect><rect x="35" y="121" width="22" height="4" fill="var(--color-bg)"></rect><rect x="176" y="40" width="76" height="100" rx="4" fill="var(--color-contrast-lower)"></rect><rect x="185" y="50" width="44" height="8" fill="var(--color-contrast-high)"></rect><rect x="185" y="64" width="58" height="6" fill="var(--color-contrast-low)"></rect><rect x="185" y="74" width="52" height="6" fill="var(--color-contrast-low)"></rect><rect x="185" y="84" width="31" height="6" fill="var(--color-contrast-low)"></rect><rect x="185" y="94" width="52" height="6" fill="var(--color-contrast-low)"></rect><rect x="185" y="114" width="58" height="18" fill="var(--color-contrast-medium)"></rect><rect x="203" y="121" width="22" height="4" fill="var(--color-bg)"></rect></svg>'
published : true
---
import { Playground, PlaygroudCode } from 'components/styleguide';
import {PricingTable} from 'components/pricing';

[TODO]

<PricingTable
    items={[
        {
            title: 'Free',
            features: ['1x user', 'Free 15/days trial', 'Access to all features', '1 project'],
        },
        {
            isPopular: true,
            title: 'Pro',
            features: [
                '1x user',
                'Access to all features',
                '10 projects',
                'E-commerce integration',
                'Email support',
            ],
        },
        {
            title: 'Enterprise',
            features: [
                '10x users',
                'Access to all features',
                'Unlimited projects',
                'E-commerce integration',
                '24/7 support',
                'Full security',
            ],
        },
    ]}
/>
