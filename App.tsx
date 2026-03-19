import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import React from "react";

const Nav = () => (
  <nav className="fixed w-full top-0 bg-[#fafafa]/90 backdrop-blur-md border-b border-black z-50">
    <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
      <div className="font-black tracking-widest text-xl font-['Noto_Serif_KR']">
        W. SNELLIUS
      </div>
      <div className="hidden md:flex space-x-10 text-xs font-bold tracking-[0.1em] text-black/70">
        <a href="#ch1" className="hover:text-black transition-colors">
          01. 관찰자
        </a>
        <a href="#ch2" className="hover:text-black transition-colors">
          02. 도구
        </a>
        <a href="#ch3" className="hover:text-black transition-colors">
          03. 증명
        </a>
        <a href="#ch4" className="hover:text-black transition-colors">
          04. 적용
        </a>
        <a href="#ch5" className="hover:text-black transition-colors">
          05. 성찰
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <header className="relative min-h-screen flex flex-col justify-center pb-24 pt-32 border-b border-black">
    <div className="w-full">
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-10 tracking-[0.3em] text-xs md:text-sm border-l-2 border-black pl-4 uppercase font-bold text-black/70"
      >
        First Principles Thinking
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-6xl md:text-[7rem] lg:text-[9rem] font-black font-['Noto_Serif_KR'] leading-[1.05] mb-16 tracking-tighter"
      >
        빛의 각도를 잰
        <br />
        수학자.
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
        className="w-full h-[2px] bg-black mb-16 origin-left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-xl md:text-2xl font-light leading-relaxed tracking-tight">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          교과서에 나오는 '비율과 각도'가
          <br className="hidden md:block" />
          실제 우주와 자연의 크기를 재는 잣대가 될 수 있음을 증명한 인물,
          <br />
          <strong className="font-bold font-['Noto_Serif_KR']">
            빌레브로르트 스넬리우스(1580~1626)
          </strong>
          .
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-gray-600"
        >
          수학이 단순한 문제 풀이를 넘어 세상을 읽는 언어임을 보여주기 위해,
          <br className="hidden md:block" />
          그의 사고 과정을 중학교 1학년도 이해할 수 있는 쉬운 시선으로 다시 따라가 봅니다.
        </motion.p>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-12 left-0 flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-black/50"
    >
      Scroll to explore
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={14} />
      </motion.div>
    </motion.div>
  </header>
);

const Section = ({
  id,
  number,
  title,
  subtitle,
  children,
  noBorder = false,
}: {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  noBorder?: boolean;
}) => (
  <section
    id={id}
    className={`grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 py-24 md:py-32 group ${
      noBorder ? "" : "border-b border-black"
    }`}
  >
    <div className="md:col-span-4 lg:col-span-5 relative">
      <div className="sticky top-32">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-7xl lg:text-[8rem] font-black font-['Noto_Serif_KR'] tracking-tighter"
        >
          {number}
        </motion.h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="mt-6 md:mt-10"
        >
          <h3 className="text-3xl font-bold font-['Noto_Serif_KR'] tracking-tight leading-snug">
            {title}
          </h3>
          <p className="text-sm font-bold text-gray-400 mt-3 tracking-[0.15em] uppercase">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
    <div className="md:col-span-8 lg:col-span-7 pt-4 md:pt-8">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  </section>
);

const RefractionDiagram = () => {
  return (
    <div className="w-full border border-black p-8 my-16 bg-white relative overflow-hidden group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:-translate-x-1 duration-300">
      <div className="absolute top-4 left-4 text-xs tracking-[0.2em] uppercase font-bold text-black/50">
        [ 굴절 모델링 ]
      </div>
      <svg
        viewBox="0 0 400 300"
        className="w-full max-w-lg mx-auto mt-8"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Mediums */}
        <rect x="0" y="0" width="400" height="150" fill="#ffffff" />
        <rect x="0" y="150" width="400" height="150" fill="#f5f5f5" />

        {/* Interface Line */}
        <line x1="0" y1="150" x2="400" y2="150" stroke="#000" strokeWidth="2" />

        {/* Normal Line */}
        <line
          x1="200"
          y1="20"
          x2="200"
          y2="280"
          stroke="#000"
          strokeDasharray="6,6"
          strokeWidth="1.5"
        />

        {/* Incident Ray */}
        <motion.line
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          x1="80"
          y1="30"
          x2="200"
          y2="150"
          stroke="#000"
          strokeWidth="3"
        />

        {/* Refracted Ray */}
        <motion.line
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
          x1="200"
          y1="150"
          x2="280"
          y2="280"
          stroke="#000"
          strokeWidth="3"
        />

        {/* Angles Arc */}
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          whileInView={{ opacity: 1, pathLength: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          d="M 185 135 A 20 20 0 0 1 200 130"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        />
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          whileInView={{ opacity: 1, pathLength: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 2.4, duration: 0.5 }}
          d="M 200 170 A 20 20 0 0 1 210 165"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        />

        {/* Labels */}
        <text
          x="10"
          y="135"
          className="font-['Noto_Serif_KR'] font-bold"
          fontSize="16"
          fill="#000"
        >
          공기
        </text>
        <text
          x="10"
          y="175"
          className="font-['Noto_Serif_KR'] font-bold"
          fontSize="16"
          fill="#000"
        >
          물
        </text>

        <motion.text
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.8 }}
          x="75"
          y="20"
          className="font-['Noto_Serif_KR'] font-medium"
          fontSize="14"
          fill="#666"
        >
          들어오는 빛 (입사각)
        </motion.text>
        <motion.text
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 2.0 }}
          x="260"
          y="295"
          className="font-['Noto_Serif_KR'] font-medium"
          fontSize="14"
          fill="#666"
        >
          꺾이는 빛 (굴절각)
        </motion.text>
      </svg>
    </div>
  );
};

const FormulaBox = ({ children }: { children: React.ReactNode }) => (
  <div className="relative p-10 md:p-14 border border-black bg-white text-center my-16 group">
    <div className="absolute top-0 left-0 w-3 h-3 bg-black -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-150" />
    <div className="absolute top-0 right-0 w-3 h-3 bg-black translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-150" />
    <div className="absolute bottom-0 left-0 w-3 h-3 bg-black -translate-x-1/2 translate-y-1/2 transition-transform group-hover:scale-150" />
    <div className="absolute bottom-0 right-0 w-3 h-3 bg-black translate-x-1/2 translate-y-1/2 transition-transform group-hover:scale-150" />

    <div className="font-['Noto_Serif_KR'] font-bold italic text-2xl md:text-3xl tracking-tight leading-normal">
      {children}
    </div>
  </div>
);

export default function App() {
  return (
    <div className="font-['Noto_Sans_KR'] bg-[#FAFAFA] text-black selection:bg-black selection:text-white min-h-screen">
      <Nav />
      <main className="max-w-[1400px] mx-auto px-6 md:px-12">
        <Hero />

        {/* CH 01 */}
        <Section id="ch1" number="01." title="관찰자, 스넬" subtitle="Who & Why">
          <p className="text-2xl md:text-3xl font-light mb-10 leading-snug">
            물속에 잠긴 빨대가 꺾여 보이는 현상.<br />
            누구나 일상에서 쉽게 볼 수 있습니다.
          </p>
          <div className="space-y-6 text-lg md:text-xl text-black/80 font-light leading-relaxed">
            <p>
              하지만 네덜란드의 수학자 스넬리우스는 달랐습니다.<br />
              이 당연해 보이는 현상에 근본적인 <strong className="font-bold text-black">‘왜?’</strong>라는 의문을 품었습니다.
            </p>
            <p>
              그가 위대한 이유는 단순히 빛이 꺾인다는 사실을 안 것에 그치지 않았기 때문입니다.<br />
              그는 불규칙해 보이는 꺾임 속에서 <strong className="font-bold text-black">‘일정한 규칙’</strong>을 찾아내어,<br />
              누구나 예측할 수 있는 <strong className="font-bold text-black">수학의 언어</strong>로 완벽하게 번역해 냈습니다.
            </p>
          </div>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1705656774214-d276c2092c42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmlzbSUyMGxpZ2h0JTIwcmVmcmFjdGlvbnxlbnwxfHx8fDE3NzM5MDA5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Prism Light Refraction"
            className="w-full aspect-[21/9] object-cover filter grayscale mt-16 border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:-translate-x-1 duration-300"
          />
        </Section>

        {/* CH 02 */}
        <Section id="ch2" number="02." title="스넬의 자(Ruler)" subtitle="각도와 비율">
          <h3 className="text-3xl font-bold font-['Noto_Serif_KR'] mb-8">
            직접 잴 수 없다면 각도를 이용하라
          </h3>
          <div className="space-y-6 text-lg md:text-xl text-black/80 font-light leading-relaxed">
            <p>
              우리는 너무 멀어서 직접 길이를 잴 수 없을 때,<br />
              도형의 각도와 ‘비율’을 이용해 거리를 알아낼 수 있습니다.
            </p>
            <p>
              스넬은 이 수학적 원리를 아주 크게 확장했습니다.<br />
              가상의 거대한 삼각형을 상상하고 각도를 재어,<br />
              네덜란드 도시 사이의 거리는 물론 지구 전체의 크기까지 계산해 냈습니다.<br />
              각도와 비율이 세상을 재는 거대한 자(Ruler)가 된 것입니다.
            </p>
          </div>
        </Section>

        {/* CH 03 */}
        <Section id="ch3" number="03." title="원리의 증명" subtitle="빛의 궤적에서 규칙을 찾다">
          <h3 className="text-3xl font-bold font-['Noto_Serif_KR'] mb-8">
            물속에서 꺾인 빛의 비밀
          </h3>
          <div className="space-y-6 text-lg md:text-xl text-black/80 font-light leading-relaxed">
            <p>
              빛이 공기에서 물로 들어갈 때 꺾이는 각도를 직접 재어 봅니다.<br />
              스넬은 ‘들어오는 각도’와 ‘꺾이는 각도’를 꼼꼼히 비교하면서<br />
              놀라운 수학적 비밀을 발견합니다.
            </p>
          </div>

          <RefractionDiagram />

          <div className="space-y-6 text-lg md:text-xl text-black/80 font-light leading-relaxed">
            <p>
              스넬의 위대한 발견은 바로 이것입니다.<br />
              <strong className="font-bold text-black font-['Noto_Serif_KR'] text-2xl block mt-4">
                "빛을 어떤 각도로 쏘든, 들어오는 빛과 꺾인 빛 사이에는 항상 일정한 비율이 존재한다."
              </strong>
            </p>
          </div>

          <FormulaBox>
            들어오는 빛과 꺾이는 빛의 비율 = 항상 일정함
          </FormulaBox>
        </Section>

        {/* CH 04 */}
        <Section id="ch4" number="04." title="공식이 현실이 될 때" subtitle="실생활 적용">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="border border-black p-10 relative bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:-translate-x-1 duration-300">
              <div className="absolute top-0 right-0 p-6 font-mono text-sm tracking-widest font-bold opacity-30">
                LENS
              </div>
              <h4 className="font-bold border-b-2 border-black pb-4 mb-6 font-['Noto_Serif_KR'] text-2xl">
                04-1. 시력의 통제
              </h4>
              <div className="space-y-4 text-black/80 font-light leading-relaxed">
                <p>
                  빛이 안경알(유리)을 통과할 때 얼마나 꺾일지 수학으로 정확히 계산해 냅니다.
                </p>
                <p>
                  이 계산 덕분에 빛이 눈의 망막에 정확히 맺히도록 유리의 두께와 각도를 깎을 수 있습니다. 현미경과 우주를 보는 망원경 역시 이 법칙 덕분에 만들어졌습니다.
                </p>
              </div>
            </div>
            
            <div className="border border-black p-10 relative bg-black text-white shadow-[8px_8px_0px_0px_rgba(200,200,200,1)] transition-transform hover:-translate-y-1 hover:-translate-x-1 duration-300">
              <div className="absolute top-0 right-0 p-6 font-mono text-sm tracking-widest font-bold opacity-30">
                FIBER
              </div>
              <h4 className="font-bold border-b-2 border-white/30 pb-4 mb-6 font-['Noto_Serif_KR'] text-2xl">
                04-2. 빛을 가두는 길
              </h4>
              <div className="space-y-4 text-white/80 font-light leading-relaxed">
                <p>
                  유리에 빛을 쏘는 각도를 치밀하게 조절하면, 빛이 유리 밖으로 빠져나가지 않고 거울처럼 튕기며 나아갑니다.
                </p>
                <p>
                  이것을 '전반사'라고 부르는데, 이 원리가 바로 전 세계를 하나로 연결하는 초고속 인터넷 광랜(광섬유)의 핵심 기술입니다.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* CH 05 */}
        <Section id="ch5" number="05." title="탐구자의 시선" subtitle="자신의 다짐 및 성찰" noBorder>
          <div className="space-y-12">
            <div className="bg-black text-white p-10 md:p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-700" />
              
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-4 font-['Noto_Serif_KR'] relative z-10">
                <span className="w-3 h-3 bg-white block"></span>
                탐구하는 사람 (Inquirers)
              </h3>
              <div className="space-y-6 font-light text-xl text-white/80 leading-relaxed relative z-10">
                <p>
                  물속에 담긴 막대기가 꺾여 보이는 것은 누구나 아는 사실입니다.
                </p>
                <p>
                  하지만 스넬처럼 일상의 당연함 속에 숨겨진 규칙을 찾기 위해 <strong className="font-bold text-white">‘왜?’</strong>라는 질문을 멈추지 않는 학습자가 되겠습니다.<br className="hidden md:block" />
                  수학은 교과서 안에 머무는 기호가 아니라 세상을 관찰하는 안경이라는 것을 깨달았습니다.
                </p>
              </div>
            </div>

            <div className="border border-black p-10 md:p-16 relative overflow-hidden bg-white">
              <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] border-[1px] border-black/5 rounded-full" />
              <div className="absolute -right-10 -bottom-10 w-[300px] h-[300px] border-[1px] border-black/5 rounded-full" />
              <div className="absolute right-0 bottom-0 w-[200px] h-[200px] border-[1px] border-black/5 rounded-full" />

              <h3 className="text-3xl font-bold mb-8 flex items-center gap-4 font-['Noto_Serif_KR'] relative z-10">
                <span className="w-3 h-3 bg-black block"></span>
                사고하는 사람 (Thinkers)
              </h3>
              <div className="space-y-6 font-light text-xl text-black/80 leading-relaxed relative z-10">
                <p>
                  빛이라는 물리학적 현상을 설명하기 위해, 중학교 수준의 '비율과 각도'라는 수학적 도구를 끌어온 스넬의 통찰력을 배웠습니다.
                </p>
                <p>
                  앞으로 복잡한 문제를 만났을 때, 단편적인 암기에 그치지 않고 내가 가진 지식과 원리를 융합하여 창의적인 해결책을 도출해 내겠습니다.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-16 mt-12 border-t border-black">
        <p className="font-['Noto_Serif_KR'] tracking-[0.3em] text-xs font-bold opacity-50 uppercase">
          The Mathematics of Refraction © Snell Project
        </p>
      </footer>
    </div>
  );
}