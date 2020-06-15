import { create } from 'tailwind-rn';
import styles from '../../tailwind-styles.json';

const { tailwind, getColor: GetColor } = create(styles);

export const $ = tailwind;
export const getColor = GetColor;
export const css = tailwind;
