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
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<lottie-player src="https://assets9.lottiefiles.com/packages/lf20_LdsMcwTp7O.json"  background="transparent"  speed="1"  style="width: 100px; height: 100px;"  loop  autoplay></lottie-player>
      }
      socialButtons={
        <>
          <a href="https://twitter.com/reyhubcom">
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
