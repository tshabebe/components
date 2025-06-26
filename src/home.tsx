import { easeInOut, motion } from 'motion/react'
import { Icon } from './components/Icon'

export default function Home() {
  return (
    <main className="min-h-screen mx-auto px-3.5 md:px-6 lg:px-36 container flex flex-col">
      <div className="flex gap-16">
        <Loaders />
        <div className="pt-10">
          <WaitingComponent />
        </div>
      </div>
    </main>
  )
}

function WaitingComponent() {
  return (
    <div className="w-[400px] border-border bg-[#171819] text-[#B0B7BF] border h-full rounded-2xl">
      <button className="px-4 py-2 bg-[#222425] rounded-2xl mt-10 ml-4">
        <Icon name="ArrowLeft" />
      </button>
      <div className="border-border h-40 flex items-center justify-center border">
        {/* Image placeholder*/} Image Placeholder
      </div>
    </div>
  )
}

function Loaders() {
  return (
    <div className="pt-10 flex flex-col gap-10">
      <p>Loaders</p>
      <div className="flex flex-col w-64 border rounded-lg overflow-hidden">
        <div className="p-6 flex justify-center items-center border-b">
          <p>Accent</p>
        </div>
        <div className="p-6 flex justify-center items-center border-b">
          <ClassicLoader />
        </div>
        <div className="p-6 flex justify-center items-center border-b">
          <SpinningCubeLoader />
        </div>
        <div className="p-6 flex justify-center items-center border-b">
          <StaggeredFadeLoader />
        </div>
        <div className="p-6 flex justify-center items-center border-b">
          <PulsatingDots />
        </div>
        <div className="p-6 flex justify-center items-center">
          <RippleLoader />
        </div>
      </div>
    </div>
  )
}

function ClassicLoader() {
  return (
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#b0b7bf;] !border-t-[#585D60]" />
  )
}

function SpinningCubeLoader() {
  const cubeVariants = {
    spin: {
      rotateX: 360,
      rotateY: 360,
      transition: {
        duration: 2,
        ease: easeInOut,
        repeat: Infinity,
      },
    },
  }

  return (
    <div className="flex">
      <motion.div
        className="h-16 w-16 rounded-2xl bg-[#6B7275]"
        variants={cubeVariants}
        animate="spin"
        style={{ perspective: 200 }}
      ></motion.div>
    </div>
  )
}

function StaggeredFadeLoader() {
  const circleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <div className="flex space-x-2">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="h-4 w-4 rounded-full bg-[#585D60]"
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.9,
            delay: index * 0.2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        ></motion.div>
      ))}
    </div>
  )
}

function PulsatingDots() {
  return (
    <div className="flex">
      <div className="flex space-x-2">
        <motion.div
          className="h-3 w-3 rounded-full bg-[#6B7275]"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            ease: easeInOut,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="h-3 w-3 rounded-full bg-[#6B7275]"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: 0.3,
          }}
        />
        <motion.div
          className="h-3 w-3 rounded-full bg-[#6B7275]"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: 0.6,
          }}
        />
      </div>
    </div>
  )
}

function RippleLoader() {
  const rippleVariants = {
    start: {
      opacity: 1,
      scale: 0,
    },
    end: {
      opacity: 0,
      scale: 3,
    },
  }

  const rippleTransition = {
    duration: 2,
    ease: easeInOut,
    repeat: Infinity,
    repeatDelay: 1,
  }

  return (
    <div className="flex">
      <div className="relative h-10 w-10">
        <motion.div
          className="absolute h-full w-full rounded-full bg-[#6B7275] opacity-0"
          variants={rippleVariants}
          initial="start"
          animate="end"
          transition={rippleTransition}
        ></motion.div>
        <motion.div
          className="absolute h-full w-full rounded-full bg-[#6B7275] opacity-0"
          variants={rippleVariants}
          initial="start"
          animate="end"
          transition={{ ...rippleTransition, delay: 0.5 }}
        ></motion.div>
        <motion.div
          className="absolute h-full w-full rounded-full bg-[#6B7275] opacity-0"
          variants={rippleVariants}
          initial="start"
          animate="end"
          transition={{ ...rippleTransition, delay: 1 }}
        ></motion.div>
      </div>
    </div>
  )
}
