import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Staking <GradientText>Wiki</GradientText> 👋
        </>
      }
      description={
        <>
          Staking Can Be a Great Way To Use Your Crypto To Generate Passive Income.{' '}
          <a className="text-cyan-400 hover:underline" href="/">
          👋
            
          </a>{' '}
          Especially Because Some Cryptocurrencies Offer High Interest Rates For Staking. Before You Get Started{' '}
          <a className="text-cyan-400 hover:underline" href="/">
          👋

          </a>{' '}
          It's Important To Fully Understand How Crypto Staking Works.
        </>
      }
      avatar={
        <img
          className="h-90 w-70"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
