-- CreateEnum
CREATE TYPE "MessageType" AS ENUM ('User', 'Assistant');

-- CreateEnum
CREATE TYPE "InterviewStatus" AS ENUM ('Pre', 'InProgress', 'Done');

-- CreateTable
CREATE TABLE "Interview" (
    "id" TEXT NOT NULL,
    "githubMetadata" JSONB NOT NULL,
    "status" "InterviewStatus" NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,
    "feedback" TEXT,

    CONSTRAINT "Interview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "message" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "type" "MessageType" NOT NULL,
    "interviewId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_interviewId_fkey" FOREIGN KEY ("interviewId") REFERENCES "Interview"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
