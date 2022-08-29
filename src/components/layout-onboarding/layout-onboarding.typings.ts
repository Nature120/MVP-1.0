export type TOnPress = () => Promise<void> | void;

interface ICommonProps {
  children: React.ReactNode;
  buttonText: string;
  isButtonDisabled?: boolean;
  isWithoutRedirect?: boolean;
  onPress?: TOnPress;
}

interface ILayoutOnboardingWithLink extends ICommonProps {
  isButtonWithLink: true;
  bottomText?: string;
  routeText: string;
}

interface ILayoutOnboardingWithoutLink extends ICommonProps {
  isButtonWithLink?: false;
  bottomText?: never;
  routeText?: string;
}

export type TLayoutOnboardingProps = ILayoutOnboardingWithLink | ILayoutOnboardingWithoutLink;
