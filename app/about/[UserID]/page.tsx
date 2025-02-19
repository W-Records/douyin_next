"use client";
import { useParams } from 'next/navigation';

export default function PageParam() {
  const { UserID } = useParams();

  return (
    <div>
      <h1>User ID: {UserID}</h1>
    </div>
  );
}