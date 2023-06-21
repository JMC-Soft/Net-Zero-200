import {
  BookmarkIcon,
  ChatBubbleBottomCenterTextIcon,
  EllipsisVerticalIcon,
  HandThumbUpIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { StaticImageData } from 'next/image';
import Avatar from '@/components/ui/Avatar';

type Props = {
  imgSrc: string | StaticImageData;
  title: string;
  content: string;
  author: string;
  date: string;
  like: number;
  save: number;
};

const BUTTONS = [
  {
    Icon: HandThumbUpIcon,
    label: '좋아요',
  },
  {
    Icon: ChatBubbleBottomCenterTextIcon,
    label: '댓글',
  },
  {
    Icon: ShareIcon,
    label: '공유',
  },
  {
    Icon: BookmarkIcon,
    label: '저장',
  },
];

function PostCard({ imgSrc, title, content, author, date, like, save }: Props) {
  return (
    <section className="flex flex-col gap-y-3 border bg-white px-4 pt-4">
      <div className="flex h-10 items-center justify-between">
        <div className="flex h-full items-center gap-x-3">
          <Avatar src={imgSrc} alt="프로필 사진" />
          <div className="flex h-full flex-col justify-around text-xs">
            <span className="font-extrabold">{author}</span>
            <span className="text-gray-400">{date}</span>
          </div>
        </div>
        <EllipsisVerticalIcon className="h-full py-2 text-gray-400" />
      </div>

      <h1 className="font-extrabold">{title}</h1>
      <p>{content}</p>

      <p className="flex gap-x-5 text-xs ">
        <span>좋아요 {like}개</span>
        <span>저장 {save}개</span>
      </p>

      <div className="-mx-2 flex h-10 border-t py-2.5">
        {BUTTONS.map(({ Icon, label }) => (
          <div className="flex flex-1 items-center justify-center gap-x-1">
            <Icon className="h-full" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PostCard;
