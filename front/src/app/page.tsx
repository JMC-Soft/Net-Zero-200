import LJG from '$/images/ljg.png';
import PostCard from '@/components/ui/PostCard';

const TEMP_CONTENT =
  '오늘은 아무것도 안했다. 그냥 누워서 뒹굴거렸다. 그리고 또 누워서 뒹굴거렸다. 그리고 또 누워서 뒹굴거렸다. 그리고 또 누워서 뒹굴거렸다.     그리고 또 누워서 뒹굴거렸다. 그리고 또 누워서 뒹굴거렸다. 그리고 또 누워서 뒹굴거렸다. 그리고 또 누워서 뒹굴거렸다. 그리고 또 누워서';

export default function Home() {
  return (
    <main className="flex flex-col">
      {Array(10)
        .fill(0)
        .map((v, i) => (
          <PostCard
            imgSrc={LJG}
            title={`2023년 6월 ${i + 1}일, 준경이의 일기`}
            content={TEMP_CONTENT.slice(0, Math.random() * 100 + 20)}
            author="귀여운 준경이"
            date="6시간 전"
            like={1557}
            save={55}
          />
        ))}
    </main>
  );
}
