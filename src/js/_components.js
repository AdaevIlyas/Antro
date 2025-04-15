console.log("components");

import { video } from "../js/components/video";
video();

import { swipers } from "../js/components/swipers";
swipers();

import { header } from "../js/components/header";
header();

import { mobileMenu } from "../js/components/mobileMenu";
mobileMenu();

import { modal } from "../js/components/modal";
modal();

import { mask } from "../js/components/mask";
mask();

import { imgmove } from "../js/components/imgmove";
imgmove();

import { subscribe } from "../js/components/subscribe";
subscribe();

import { select } from "../js/components/select";
select();

import { copylink } from "../js/components/copylink";
copylink();

import { pageNavigation } from "../js/components/pageNavigation";
pageNavigation();

import { accordion } from "../js/components/accordion";
accordion();

import { reviewContent } from "./components/reviewContent";
reviewContent();

import { auditBlock } from "./components/auditBlock";
auditBlock();

import { dataSwap } from "./components/dataSwap";
try {
  dataSwap();
} catch (error) {}

import { reportWay } from "./components/reportWay";
try {
  reportWay();
} catch (error) {}
