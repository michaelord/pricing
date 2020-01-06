// import {PricingTableItem, PricingTableItemProps} from './PricingTableItem';
import {Heading, Link, List} from 'components/editable';
import {getModifiers} from 'components/libs';
import React from 'react';
import './PricingTable.scss';
import './PricingTableItem.scss';

export type PricingTableItemProps = {
	isPopular?: boolean;
	title: string;
	features?: Array<string>;
};

export type PricingTableProps = {
	items?: Array<PricingTableItemProps>;
};

export const PricingTable = (props: PricingTableProps) => {
	const base: string = 'pricing-table';
	const {items} = props;

	if (!items || (items && items.length === 0)) {
		return null;
	}

	const atts = {
		className: getModifiers(base, {}),
	};

	return (
		<div {...atts}>
			{items.map((item, index) => (
				<PricingTableItem key={`i-${index}`} {...item} />
			))}
		</div>
	);
};

export const PricingTableItem = (props: PricingTableItemProps) => {
	const {title, isPopular, features} = props;

	const base: string = `pricing-table-item`;

	const atts = {
		className: getModifiers(base, {
			popular: isPopular,
		}),
	};

	return (
		<div {...atts}>
			<div className={`${base}__header`}>
				<Heading title={title} priority={4} />
				{isPopular && <span className={`${base}__badge`}>Popular</span>}
			</div>

			<div className={`${base}__price`}>
				<span>$0</span> <i>/ month</i>
			</div>

			<List className={`${base}__features`} children={features} isUnstyled={true} />

			<div className={`${base}__footer`}>
				<Link label="Sign up" href="#" priority="primary" isWide />
			</div>
		</div>
	);
};
