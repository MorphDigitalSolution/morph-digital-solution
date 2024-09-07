import TitlePillow from "@/components/TitlePillow"
import { FaFacebook, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa"

function AboutAuthor() {
    return (
        <div className="flex flex-col items-center text-center py-10 gap-5">
        <TitlePillow>About Author</TitlePillow>
        <img
          src="https://morph-digital-mm.vercel.app/img/office.jpeg"
          alt=""
          className="h-28 rounded-full my-2 aspect-square object-cover"
        />
        <div className="text-xl font-semibold">Lin Thandar Phyo</div>
        <div className="text-neutral-500">
          Founder an CEO of Morph - Website and Digital Marketing Company
        </div>
        <div className="flex gap-3 pt-3 text-neutral-100">
          <a
            href=""
            className="bg-amber-700 hover:bg-amber-700 duration-300 size-8 flex items-center justify-center rounded-full"
          >
            <FaFacebook className="" />
          </a>
          <a
            href=""
            className="bg-amber-700 hover:bg-amber-700 duration-300 size-8 flex items-center justify-center rounded-full"
          >
            <FaTwitter className="" />
          </a>
          <a
            href=""
            className="bg-amber-700 hover:bg-amber-700 duration-300 size-8 flex items-center justify-center rounded-full"
          >
            <FaTelegram className="" />
          </a>
          <a
            href=""
            className="bg-amber-700 hover:bg-amber-700 duration-300 size-8 flex items-center justify-center rounded-full"
          >
            <FaLinkedin className="" />
          </a>
        </div>
        <TitlePillow>Recent Posts</TitlePillow>
        <div className="grid text-start gap-4">
          <div className="grid grid-cols-3 gap-5">
            <img
              src="https://morph-digital-mm.vercel.app/img/meeting.png"
              alt=""
              className="aspect-square object-cover rounded-3xl"
            />
            <div className="col-span-2 flex flex-col justify-center">
              <div className="font-semibold">
              Digital Services မှန်သမျှအကုန်ရတဲ့ Morph Website...
              </div>
              <div className="text-xs text-neutral-500">
                November 22, 2023
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <img
              src="https://morph-digital-mm.vercel.app/img/meeting.png"
              alt=""
              className="aspect-square object-cover rounded-3xl"
            />
            <div className="col-span-2 flex flex-col justify-center">
              <div className="font-semibold">
              SME လုပ်ငန်းများအတွက် ထိရောက်သော SEO ‌အလေ့...
              </div>
              <div className="text-xs text-neutral-500">
                November 22, 2023
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <img
              src="https://morph-digital-mm.vercel.app/img/meeting.png"
              alt=""
              className="aspect-square object-cover rounded-3xl"
            />
            <div className="col-span-2 flex flex-col justify-center">
              <div className="font-semibold">
              စီးပွားရေးလုပ်ငန်းမှတ်ပုံတင်ခြင်း - A Step-by-Step...
              </div>
              <div className="text-xs text-neutral-500">
                November 22, 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default AboutAuthor