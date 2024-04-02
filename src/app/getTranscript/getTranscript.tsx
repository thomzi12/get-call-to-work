import { YoutubeTranscript } from "youtube-transcript"; // run ` npm i youtube-transcript`

async function VideoDetails(video: string) {
  const transcript = await YoutubeTranscript.fetchTranscript(video)
    .then((result) => {
      const joinedTranscription = result
        .map((item) => item.text)
        .join(" ")
        .replaceAll("\n", " ");

      return joinedTranscription;
    })
    .catch(() => {
      console.log("error fetching Youtube transcript");
      return undefined;
    });

  return transcript;
}

export default VideoDetails;