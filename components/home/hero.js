import React from 'react';
import Animation from './animation';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Hello i'm alwwways!
          <br className="hidden lg:inline-block"/>today learn?
        </h1>
        <p className="mb-8 leading-relaxed">무한한 원질이 있으며, 청춘의 따뜻한 어디 봄바람이다. 어디 않는 만천하의 이것이야말로 그들은 쓸쓸한 우리 청춘 있는가? 것은 그와 가는 우리 많이 일월과 운다. 이상 용감하고 그들의 품었기 유소년에게서 두기 현저하게 지혜는 아니다. 바로 영원히 얼음과 많이 바이며, 그들의 가장 동산에는 갑 있는가? 인류의 그들에게 되려니와, 갑 놀이 약동하다. 부패를 이상을 가슴에 어디 능히 웅대한 그러므로 만천하의 그들은 말이다. 꽃 싹이 품으며, 충분히 사는가 하여도 힘차게 부패뿐이다. 능히 청춘 같으며, 이것이다. 수 할지라도 갑 이상의 우리 주며, 생생하며, 피다. 청춘 구하기 역사를 있으랴?</p>
        <div className="flex justify-center">
          <Link href='/projects'>
            <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">프로젝트</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation/>
      </div>
    </>
  );
};

export default Hero;