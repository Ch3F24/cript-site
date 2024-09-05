import { useEffect, useRef } from 'react';
import video from '../../public/videos/animation.mp4';
import { useVideoContext } from '../Context/VideoContext';
import { useTranslation } from "react-i18next"

const StoryPart = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { setVideoRef } = useVideoContext();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (videoRef.current) {
     setVideoRef(videoRef.current);
    }
  }, [setVideoRef]);

  useEffect(() => {
    if (videoRef.current) {
      const tracks = videoRef.current.textTracks;
      const languageModeMap: Record<string, ['showing' | 'hidden', 'showing' | 'hidden']> = {
        'en': ['showing', 'hidden'],
        'ro': ['hidden', 'showing'],
        'hu': ['hidden', 'hidden'],
      };
      
      const resolvedLanguage = i18n.resolvedLanguage || 'hu';
      const [mode0, mode1] = languageModeMap[resolvedLanguage] || ['hidden', 'hidden'];

      tracks[0].mode = mode0;
      tracks[1].mode = mode1;
    }
  }, [i18n.resolvedLanguage]);

  return (
    <>
      <video ref={videoRef} src={video} playsInline className='w-full h-full object-cover'>
        <track
          label="English"
          kind="subtitles"
          srcLang="en"
          src="tracks/en.vtt" />
        <track
          label="Romanian"
          kind="subtitles"
          srcLang="ro"
          src="tracks/ro.vtt" />
      </video>
    </>
  )
}

export default StoryPart