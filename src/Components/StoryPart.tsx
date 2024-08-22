import video from '../../public/videos/storyvideo.mp4';

const StoryPart = () => {
  return (
    <>
      <video src={video} loop autoPlay muted playsInline className='w-full h-full object-cover'></video>
    </>
  )
}

export default StoryPart