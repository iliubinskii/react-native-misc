import { I18nManager } from "react-native";
import { TextAlign } from "./types";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const isRtl = I18nManager.isRTL;

export const rtlSign = I18nManager.isRTL ? -1 : 1;

export const statusBarHeight = getStatusBarHeight();

export const textAlignBiDir = I18nManager.isRTL
  ? TextAlign.right
  : TextAlign.left;
