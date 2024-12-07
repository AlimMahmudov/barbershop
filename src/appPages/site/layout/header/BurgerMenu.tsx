import React, { FC } from "react";
import scss from "../header/BurgerMenu.module.scss";
import Link from "next/link";

interface LinksType {
	name: string;
	link: string;
}

interface BurgerMenuProps {
	links: LinksType[];
	isOpen: boolean;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ links, isOpen }) => {
	return (
		<div
			className={
				isOpen ? `${scss.burger_menu} ${scss.active}` : `${scss.burger_menu}`
			}>
			<div className={scss.content}>
				<div className={scss.nav}>
				 
						{links.map((item, index) => (
							 
								<Link key={index} href={item.link}>{item.name}</Link>
						 
						))}
					 
					 
				</div>
			</div>
		</div>
	);
};

export default BurgerMenu;
