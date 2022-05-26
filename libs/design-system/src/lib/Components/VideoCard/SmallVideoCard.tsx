import React from 'react';

import { ReactComponent as PlayCircle } from '../../../../images/action/play-circle.svg';
import Tag from '../Tag';
import { LargeVideoCardProps } from './LargeVideoCard';
import { ContentExternalLinkIcon, TimeIcon } from '../Icons';

export interface SmallVideoCardProps extends LargeVideoCardProps {
  tags: string[];
}

export function SmallVideoCard({
  title,
  length,
  tags,
  link,
}: SmallVideoCardProps) {
  const minutes = String(Math.floor(length / 60)).padStart(2, '0');
  const seconds = length % 60;

  const url = new URL(link);

  if (url.hostname !== 'www.youtube.com') {
    throw new Error('VideoCard only accepts youtube embeds');
  }

  return (
    <a
      href={link}
      className="flex gap-4 rounded-xl bg-white p-6 transition ease-in hover:shadow-lg"
    >
      <div className="aspect-square h-min rounded bg-gradient-to-br from-fuchsia-200 to-cyan-200 p-7">
        <PlayCircle />
      </div>
      <div className="grow">
        <h6 className="text-xl font-semibold leading-6 line-clamp-2">
          {title}
        </h6>
        <div className="line-clamp-1">
          {tags.map((tag, i) => (
            <div className="inline-block p-px" key={i}>
              <Tag name={tag} />
            </div>
          ))}
        </div>
        <div className="flex items-end gap-1 pt-1 text-gray-500">
          <TimeIcon />
          <div className="text-base leading-3">
            {minutes}:{seconds}
          </div>
        </div>
      </div>
      <div>
        <ContentExternalLinkIcon />
      </div>
    </a>
  );
}