export interface CardProps {
  tokens: CardTokens;
};

export type CardTokens = {
  borderFocused: string;
  borderHovered: string;

  /**
   * The margin that is applied to the Card's children.
   */
  childrenMargin?: number;

  /**
   * The mouse cursor to be displayed when pointed over the card.
   */
  cursor: string;

  /**
   * The maximum width of the card.
   */
  maxWidth?: number | string;
 
  /**
   * The minimum width of the card.
   */
  minWidth?: number | string;

  /**
   * The maximum height of the card.
   */
  maxHeight?: number | string;

  /** 
   * The minimum height of the card.
   */
  minHeight?: number | string;
};