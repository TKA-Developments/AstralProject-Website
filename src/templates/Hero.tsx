import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Logo } from './Logo';
import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Hero = () => {
  const router = useRouter();

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          {/* <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li> */}
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              <span className="text-primary-500">Astral App</span>
            </>
          }
          description="Meet your friends"
          button={
            <div className="flex flex-col justify-center gap-4">
              <div>
                <Link href="#">
                  <Image
                    src={`${router.basePath}/assets/images/google-play-badge.webp`}
                    width={300}
                    height={89}
                  />
                </Link>
              </div>
              <div>
                <Link href="#">
                  <Image
                    src={`${router.basePath}/assets/images/app-store-badge.webp`}
                    width={300}
                    height={89}
                  />
                </Link>
              </div>
            </div>
            // <Link href="https://creativedesignsguru.com/category/nextjs/">
            //   <a>
            //     <Button xl>Download Your Free Theme</Button>
            //   </a>
            // </Link>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
