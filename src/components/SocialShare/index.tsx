import { Stack } from "@mui/material";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  ViberIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

import { SOCIAL_BUTTON_SIZE } from "../../const";
import ISocialShare from "../../interfaces/ISocialShare.interface";

export default function SocialShare({ url }: ISocialShare) {
  return (
    <Stack direction="row" spacing={1} sx={{ m: 1, mt: 2 }}>
      <EmailShareButton url={url}>
        <EmailIcon round size={SOCIAL_BUTTON_SIZE} />
      </EmailShareButton>
      <FacebookShareButton url={url}>
        <FacebookIcon round size={SOCIAL_BUTTON_SIZE} />
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon round size={SOCIAL_BUTTON_SIZE} />
      </LinkedinShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon round size={SOCIAL_BUTTON_SIZE} />
      </TelegramShareButton>
      <ViberShareButton url={url}>
        <ViberIcon round size={SOCIAL_BUTTON_SIZE} />
      </ViberShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon round size={SOCIAL_BUTTON_SIZE} />
      </TwitterShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon round size={SOCIAL_BUTTON_SIZE} />
      </WhatsappShareButton>
    </Stack>
  );
}
