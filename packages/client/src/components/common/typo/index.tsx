import Marquee from "./Marquee";
import * as Heading from "./Heading";
import * as Body from "./Body";

const BaseTypo = Body.Body1;

type TypoComponentType = typeof BaseTypo & {
  Marquee: typeof Marquee;
  Heading1: typeof Heading.Heading1;
  Heading2: typeof Heading.Heading2;
  Heading3: typeof Heading.Heading3;
  Heading4: typeof Heading.Heading4;
  Heading5: typeof Heading.Heading5;
  Heading6: typeof Heading.Heading6;
  Body1: typeof Body.Body1;
  Body2: typeof Body.Body2;
  Body3: typeof Body.Body3;
  Body4: typeof Body.Body4;
};

const Typo = BaseTypo as TypoComponentType;

Typo.Marquee = Marquee;

Typo.Heading1 = Heading.Heading1;
Typo.Heading2 = Heading.Heading2;
Typo.Heading3 = Heading.Heading3;
Typo.Heading4 = Heading.Heading4;
Typo.Heading5 = Heading.Heading5;
Typo.Heading6 = Heading.Heading6;

Typo.Body1 = Body.Body1;
Typo.Body2 = Body.Body2;
Typo.Body3 = Body.Body3;
Typo.Body4 = Body.Body4;

export default Typo;
