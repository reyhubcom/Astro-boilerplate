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
          Staking can be a great way to use your crypto to generate passive income{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Staking
          </a>{' '}
          especially because some cryptocurrencies offer high interest rates for staking. Before you get started{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Wiki
          </a>{' '}
          it's important to fully understand how crypto staking works.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
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
