interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     * Navbar bg color in iOS theme
     *
     * @default 'bg-ios-light-surface-2 dark:bg-ios-dark-surface-2'
     */
    bgIos?: string;
    /**
     * Navbar bg color in Material theme
     *
     * @default 'bg-md-light-surface-2 dark:bg-md-dark-surface-2'
     */
    bgMaterial?: string;
    /**
     * Title text color iOS theme
     *
     * @default 'text-black dark:text-white'
     */
    titleIos?: string;
    /**
     * Title text color in Material theme
     *
     * @default 'text-black dark:text-white'
     */
    titleMaterial?: string;
  };

  /**
   * Tailwind CSS class for font size in iOS theme
   *
   * @default 'text-[17px]'
   */
  fontSizeIos?: string;

  /**
   * Tailwind CSS class for font size in Material theme
   *
   * @default 'text-[16px]'
   */
  fontSizeMaterial?: string;

  /**
   * Tailwind CSS class for navbar title font size in iOS theme
   *
   * @default 'text-[17px]'
   */
  titleFontSizeIos?: string;

  /**
   * Tailwind CSS class for navbar title font size in Material theme
   *
   * @default 'text-[22px]'
   */
  titleFontSizeMaterial?: string;

  /**
   * Tailwind CSS class for medium-sized navbar title font size in iOS theme
   *
   * @default 'text-[24px]'
   */
  titleMediumFontSizeIos?: string;

  /**
   * Tailwind CSS class for medium-sized navbar title font size in Material theme
   *
   * @default 'text-[24px]'
   */
  titleMediumFontSizeMaterial?: string;

  /**
   * Tailwind CSS class for large-sized navbar title font size in iOS theme
   *
   * @default 'text-[34px]'
   */
  titleLargeFontSizeIos?: string;

  /**
   * Tailwind CSS class for large-sized navbar title font size in Material theme
   *
   * @default 'text-[28px]'
   */
  titleLargeFontSizeMaterial?: string;

  /**
   * Additional class to add on Navbar's "background" element
   */
  bgClassName?: string;
  /**
   * Additional class to add on Navbar's "inner" element
   */
  innerClassName?: string;
  /**
   * Additional class to add on Navbar's "left" element
   */
  leftClassName?: string;
  /**
   * Additional class to add on Navbar's "title" element
   */
  titleClassName?: string;
  /**
   * Additional class to add on Navbar's "subtitle" element
   */
  subtitleClassName?: string;
  /**
   * Additional class to add on Navbar's "right" element
   */
  rightClassName?: string;
  /**
   * Additional class to add on Navbar's "subnavbar" element
   */
  subnavbarClassName?: string;
  /**
   * Makes Navbar background translucent (with `backdrop-filter: blur`) in iOS theme
   *
   * @default true
   */
  translucent?: boolean;
  /**
   * Renders outer hairlines (borders) on iOS theme
   *
   * @default true
   */
  hairlines?: boolean;

  /**
   * Renders medium-sized navbar with extra row for medium-sized title which becomes usual size on scroll
   *
   * @default false
   */
  medium?: boolean;
  /**
   * Renders large-sized navbar with extra row for large-sized title which becomes usual size on scroll
   *
   * @default false
   */
  large?: boolean;
  /**
   * Renders transparent navbar which becomes opaque on scroll
   *
   * @default false
   */
  transparent?: boolean;
  /**
   * Element required for correct "collapse" functionality for medium/large/transparent Navbar. If not specified, it will use Navbar's parent element
   *
   * @default undefined
   */
  scrollEl?: any;

  /**
   * Makes centered navbar title. If not specified then it set it to center in iOS theme
   *
   * @default undefined
   */
  centerTitle?: boolean;

  /**
   * Content of the Navbar's "left" area
   */
  left?: string | number | React.ReactNode;
  /**
   * Content of the Navbar's "title" area
   */
  title?: string | number | React.ReactNode;
  /**
   * Content of the Navbar's "subtitle" area
   */
  subtitle?: string | number | React.ReactNode;
  /**
   * Content of the Navbar's "right" area
   */
  right?: string | number | React.ReactNode;
  /**
   * Content of the Navbar's "subnavbar" area
   */
  subnavbar?: string | number | React.ReactNode;
}
