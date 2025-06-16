"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"

export default function WelcomePage() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null)
    } else {
      setActiveSection(section)
    }
  }

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Fixed header with skip button */}
      <div className="w-full p-4 flex justify-end shrink-0">
        <button onClick={() => router.push("/dashboard")} className="text-gray-700 font-medium flex items-center">
          Skip <ChevronDown className="w-4 h-4 ml-1 rotate-270" />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 px-4 pb-4">
        <div className="max-w-md mx-auto">
          {/* Welcome section */}
          <div className="flex p-6 mb-4 text-white relative rounded-[20px] h-[231px]" style={{background: 'linear-gradient(180deg, #4199FF 0%, #240E9D 100%)'}}>
          <div className="flex items-center justify-between">
              <div className="flex-1">
                <h1 className="text-[25px] font-semibold leading-[38px] mb-2 text-white w-[140px] h-[76px]">Welcome, Jane!</h1>
                  <p className="text-[12px] leading-[18px] text-white w-[294px] h-[36px] font-normal">
                  Here's a handy <span className="font-semibold">Quick Guide</span> to help you get the most out of your
                  journey with Nicovape® Q.
                </p>
              </div>
              <div className="ml-4 absolute bottom-[13px] right-[-12px]">
                <svg width="212" height="240" viewBox="0 0 212 240" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M146.941 207.423C130.624 194.136 116.159 179.009 102.634 162.969C97.7833 157.225 91.7118 154.233 84.3158 153.553C83.7138 153.519 83.1118 153.553 82.5156 153.645C81.2886 153.793 80.0674 153.941 79.3049 153.074C78.164 151.783 78.5424 149.602 78.2729 147.803C77.9977 138.667 80.8242 130.307 84.7687 122.233C85.1701 121.49 85.9383 121.011 86.7869 120.982C92.1475 120.354 97.4794 119.446 102.852 118.989C108.12 118.538 113.401 117.111 118.733 118.55C124.535 120.297 129.5 118.812 133.674 114.581C135.508 112.725 137.022 110.572 138.134 108.22C139.654 105.804 141.305 103.469 143.076 101.231C146.058 97.7131 149.303 94.5896 153.975 93.3219C162.782 90.9351 171.588 91.3576 180.423 93.0421C180.922 93.1392 181.587 93.2077 181.415 94.03C179.334 98.3869 178.479 103.069 177.803 107.78C177.195 111.412 176.943 115.101 177.058 118.778C176.364 124.157 177.963 129.576 181.472 133.722C186.472 139.9 192.83 144.286 200.077 147.466C200.088 178.061 200.094 208.662 200.094 239.258C200.094 239.497 200.06 239.743 200.042 239.983C180.629 231.891 163.177 220.625 146.941 207.406V207.423Z" fill="#EFEFEF"/>
<path d="M78.2672 147.809C77.992 138.672 80.8185 130.318 84.763 122.238C76.0541 119.646 67.4943 116.665 58.9976 113.433C48.5515 109.453 42.4972 102.298 40.6166 91.3462C39.5101 84.9279 38.7476 78.4868 38.1456 72.0171C36.9015 58.7124 35.4452 45.4704 32.1371 32.4397C30.377 25.5246 29.3851 18.3869 27.8715 11.3804C27.6995 10.364 27.4071 9.37616 27.0058 8.42256C26.4611 7.28051 25.6241 7.31478 24.9762 8.41685C24.4717 9.39329 24.2424 10.4897 24.3169 11.586C24.3398 14.247 24.3226 16.9079 24.3226 19.586C19.2028 12.985 14.8111 5.62455 8.24647 0C9.49632 4.51106 12.2655 8.19986 14.5588 12.2198C13.6816 12.3797 13.4523 11.6031 13.0739 11.1577C10.3334 7.89151 7.64447 4.57959 4.46823 1.71306C3.91783 1.21627 3.2413 0.26267 2.51891 0.810849C1.87678 1.30193 2.6737 2.13562 2.98904 2.73519C4.59436 5.60171 6.38888 8.35974 8.3554 10.9921C8.9058 11.7802 9.65112 12.454 9.92059 13.419C10.213 13.4989 10.385 13.7959 10.3047 14.0814C10.299 14.1099 10.2875 14.1328 10.2761 14.1613C10.557 14.0357 10.6716 14.2413 10.7978 14.424C10.8092 14.4468 10.792 14.4925 10.7863 14.5268L10.3105 14.1442C10.0123 14.0243 9.86326 13.6988 9.95499 13.3961C9.15233 13.3562 8.90006 12.6481 8.48726 12.1627C6.40035 9.70164 4.16436 7.37188 1.79651 5.17345C1.23465 4.65953 0.712918 4.0257 -0.600006 3.98001C2.49024 10.2156 6.92208 15.2862 10.5742 20.8936C7.09407 18.581 4.26183 15.3376 0.151055 13.6874C-0.0553432 14.7495 0.615452 15.212 1.03972 15.7259C4.43956 19.8772 8.2694 23.6345 12.0419 27.4375C15.1322 30.5496 18.2339 33.6445 21.3872 36.6938C22.121 37.3333 22.488 38.2926 22.3618 39.2577C21.5076 50.6552 21.2954 62.0928 21.7369 73.5132C22.0752 84.8137 23.262 96.0171 25.9165 107.066C28.4907 117.784 34.052 126.047 43.6553 131.803C54.5944 138.335 66.1929 143.703 78.2614 147.803" fill="#CE8765"/>
<path d="M113.584 102.344C112.999 101.213 112.386 100.922 111.182 101.362C109.835 101.767 108.401 101.819 107.031 101.51C101.814 100.677 97.8292 97.8273 94.5211 93.9158C88.2431 86.4925 85.0497 77.6131 82.5385 68.4254C82.3779 67.843 82.3837 67.2034 81.753 66.8722C87.601 65.8672 92.7953 63.2006 97.9725 60.5225C100.277 59.409 102.45 58.05 104.463 56.4682C105.466 55.6345 106.034 55.7887 106.716 56.8965C108.9 60.551 111.583 63.8858 114.697 66.798C116.015 68.0657 117.575 69.0592 119.277 69.7159C120.023 69.9843 120.527 69.9729 120.957 69.2248C121.777 67.7973 123.136 67.3862 124.69 67.4033C126.788 68.2027 127.516 69.4532 127.046 71.6231C126.461 74.05 125.441 76.3512 124.036 78.4183C123.411 79.3205 123.268 80.4739 123.646 81.5018C126.639 91.2834 131.558 100.368 138.117 108.231C136.999 110.59 135.497 112.737 133.657 114.592C129.483 118.824 124.518 120.303 118.716 118.561C117.965 112.897 116.227 107.409 113.579 102.344M104.239 85.2077C102.444 85.7445 100.713 85.1278 98.9586 84.945C98.735 82.975 99.7728 81.1934 99.8129 79.2463C99.9104 77.3219 99.4402 75.4147 98.4541 73.7587C99.8014 77.0992 99.5262 80.3769 98.3165 83.6545C98.0929 84.0828 98.2592 84.6081 98.6892 84.8308C98.7809 84.8765 98.8726 84.9051 98.9758 84.9222C100.501 86.0871 102.588 86.2013 104.233 85.2077M91.1384 75.9286C91.2531 76.631 91.9067 77.1163 92.6176 77.0193C93.1967 76.9964 93.8331 76.6538 93.7872 76.0657C93.6439 74.2555 94.7963 74.8094 95.7824 74.9465C93.8388 73.7759 91.9984 73.8044 90.1924 75.0778L89.7338 75.2434C89.7739 75.2834 89.8083 75.3576 89.8542 75.3633C90.072 75.3862 90.1752 75.2777 90.181 75.0607C90.7944 75.0207 91.1098 75.1292 91.1442 75.9229M103.981 93.7273C106.882 95.1206 110.746 92.6367 111.027 89.262C111.113 88.2113 110.351 88.5996 109.932 88.6681C106.813 89.1706 103.746 89.9757 100.782 91.0721C101.59 92.2313 102.697 93.1449 103.981 93.7273ZM100.466 66.798C102.221 65.9472 104.153 65.5246 106.102 65.5646C106.762 65.5989 107.421 65.7359 108.08 65.8158C108.419 65.8558 108.86 66.05 108.98 65.5475C109.072 65.1763 108.694 65.045 108.419 64.965C105.454 64.1713 102.307 64.4625 99.5434 65.7873C99.3141 65.8844 99.0905 65.9872 98.9529 66.05C99.3141 67.2148 99.876 67.0607 100.466 66.798ZM93.0935 69.9101C93.4547 69.9443 93.7757 69.6759 93.8101 69.3105C93.8388 68.9907 93.6267 68.6938 93.3171 68.6138C91.5054 67.9286 86.5289 70.641 85.7491 73.2106C88.1284 71.1606 90.353 69.9101 93.0992 69.9044M102.393 71.2634C103.253 71.2919 104.13 70.7552 104.302 71.9829C104.463 72.611 105.105 72.9822 105.735 72.8223C105.735 72.8223 105.735 72.8223 105.741 72.8223C106.378 72.7766 106.888 72.2684 106.934 71.6288C106.957 71.0407 107.335 70.6752 107.622 70.0699C105.684 69.813 104.05 69.99 102.393 71.2634ZM97.8406 73.0792C97.898 73.1135 98.0298 73.0221 98.1273 72.9822C98.0757 72.8794 98.0528 72.7366 97.9725 72.6852C97.9152 72.651 97.7776 72.748 97.6686 72.788C97.726 72.8908 97.7604 73.0278 97.8406 73.0735" fill="#CE8765"/>
<path d="M81.753 66.8779C87.601 65.8729 92.7953 63.2063 97.9725 60.5282C100.277 59.4147 102.45 58.0557 104.463 56.4739C105.466 55.6403 106.034 55.7887 106.716 56.9022C108.9 60.5567 111.583 63.8915 114.697 66.8037C116.015 68.0714 117.575 69.065 119.277 69.7216C120.023 69.99 120.527 69.9786 120.957 69.2305C121.777 67.803 123.136 67.3919 124.69 67.409C125.521 62.3954 125.842 57.3819 124.569 52.3969C122.809 45.5046 118.051 41.6845 110.769 41.2106C110.098 41.2277 109.433 41.1363 108.791 40.9479C99.939 37.5275 92.1761 39.6231 85.2331 45.6474C82.4181 48.177 79.9929 51.1064 78.0436 54.3383C76.3236 57.2163 74.2023 59.8315 71.7427 62.1156C70.9687 62.8009 71.0719 63.2291 71.6796 63.8744C74.4545 66.8437 77.9404 67.3862 81.7473 66.8779" fill="#96472F"/>
<path d="M181.403 94.0414C179.316 98.3983 178.468 103.081 177.786 107.797C177.178 111.429 176.931 115.112 177.04 118.795C184.78 119.052 192.474 120.08 200.002 121.873C200.014 113.57 200.031 105.268 200.042 96.965C193.908 95.5318 187.681 94.5553 181.403 94.0471" fill="#CE8765"/>
<path d="M194.361 84.985C192.239 84.1171 191.041 82.7866 191.333 81.359C191.758 79.2919 193.432 79.3547 195.404 79.4575C193.438 78.3669 191.54 77.4818 191.763 75.2491C191.964 73.222 193.902 73.3762 195.565 73.182C194.601 71.6745 192.979 70.4126 194.24 68.6824C195.691 66.6952 197.537 68.1799 199.274 68.5625C197.617 64.5939 197.697 64.1371 200.077 63.3319C200.793 63.2348 201.441 63.8287 202.175 63.5375C202.41 64.5025 203.339 64.7309 204.01 65.1991C206.406 66.8722 208.86 68.4654 210.827 70.6695C211.148 71.0293 211.543 71.4176 211.348 71.9486C211.113 72.5996 210.483 72.5767 209.949 72.5082C208.682 72.354 207.421 72.1256 205.804 71.8744C207.249 72.8794 208.419 73.6274 209.502 74.4897C209.984 74.8722 210.769 75.2948 210.443 76.0771C210.15 76.7794 209.33 76.7737 208.677 76.7623C207.392 76.7395 206.114 76.631 204.291 76.5282C205.896 77.419 207.014 78.0129 208.098 78.6581C208.556 78.9322 209.124 79.2748 209.038 79.8915C208.935 80.6567 208.155 80.7538 207.61 80.7823C205.93 80.868 204.251 80.8109 202.565 80.8109C203.66 81.5817 204.847 82.2156 206.097 82.6895C206.716 82.9579 207.49 83.2834 207.45 84.0086C207.404 84.8765 206.475 85.0021 205.799 85.2077C204.629 85.556 203.408 85.7273 202.187 85.7102L200.082 85.9957C198.202 85.4989 196.19 85.7445 194.343 84.9907M196.213 73.4104C196.127 73.3476 196.023 73.3076 195.92 73.2848C195.869 73.2848 195.817 73.4104 195.76 73.4789L196.052 73.6217L196.213 73.4104Z" fill="#CE8765"/>
<path d="M10.3162 14.1385L10.792 14.5211C10.7978 14.4868 10.8207 14.4411 10.8035 14.4183C10.6774 14.2355 10.5627 14.03 10.2818 14.1556L10.3105 14.1328" fill="#FDFDFD"/>
<path d="M9.96072 13.3961C9.86899 13.6988 10.0181 14.0186 10.3162 14.1385L10.2875 14.1613C10.4079 13.8872 10.2875 13.5674 10.0123 13.4475C9.98939 13.4361 9.96072 13.4247 9.93205 13.419L9.96645 13.3904" fill="#FDFDFD"/>
<path d="M100.776 91.0721C101.584 92.2313 102.691 93.1449 103.975 93.7331C106.876 95.1263 110.741 92.6424 111.021 89.2677C111.107 88.217 110.345 88.6053 109.926 88.6681C106.808 89.1706 103.74 89.9757 100.776 91.0721Z" fill="#FDFDFD"/>
<path d="M98.9529 66.05C99.3141 67.2148 99.876 67.0607 100.467 66.798C102.221 65.9472 104.153 65.5246 106.102 65.5646C106.762 65.5989 107.421 65.7359 108.08 65.8159C108.419 65.8558 108.86 66.05 108.98 65.5475C109.072 65.1763 108.694 65.045 108.419 64.965C105.454 64.1713 102.307 64.4625 99.5434 65.7873C99.3141 65.8844 99.0905 65.9872 98.9529 66.05Z" fill="#634155"/>
<path d="M85.7434 73.2163C88.1227 71.1663 90.3472 69.9158 93.0935 69.9101C93.4547 69.9443 93.7758 69.6759 93.8102 69.3105C93.8388 68.9907 93.6267 68.6938 93.3171 68.6196C91.5054 67.9343 86.5289 70.6467 85.7491 73.2163" fill="#634155"/>
<path d="M107.622 70.0757C105.684 69.8187 104.05 70.0014 102.393 71.2691C103.253 71.2976 104.13 70.7609 104.302 71.9886C104.463 72.6167 105.105 72.9879 105.735 72.828C105.735 72.828 105.741 72.828 105.747 72.828C106.383 72.7823 106.894 72.2741 106.939 71.6345C106.962 71.0464 107.341 70.6809 107.627 70.0757" fill="#634155"/>
<path d="M90.1752 75.0721C90.7887 75.0321 91.104 75.1406 91.1384 75.9343C91.2531 76.6367 91.9067 77.1221 92.6176 77.025C93.1967 77.0079 93.8331 76.6595 93.7872 76.0714C93.6439 74.2612 94.7963 74.8151 95.7824 74.9522C93.8445 73.7816 91.9984 73.8101 90.1924 75.0835L90.1752 75.0664V75.0721Z" fill="#634155"/>
<path d="M98.9586 84.945C98.735 82.975 99.7728 81.1934 99.8129 79.2405C99.9104 77.3219 99.4402 75.409 98.4541 73.753C99.8014 77.0935 99.5262 80.3712 98.3165 83.6488C98.0929 84.0771 98.2592 84.6024 98.6949 84.8251C98.7866 84.8708 98.8784 84.8994 98.9816 84.9165L98.9586 84.9393V84.945Z" fill="#634155"/>
<path d="M98.9816 84.9222C100.507 86.0871 102.594 86.2013 104.239 85.2077C102.444 85.7445 100.713 85.1278 98.9586 84.945L98.9816 84.9222Z" fill="#634155"/>
<path d="M97.6629 72.7937C97.7202 72.8965 97.7546 73.0336 97.8349 73.0792C97.8922 73.1135 98.0241 73.0221 98.1216 72.9822C98.07 72.8794 98.047 72.7366 97.9668 72.6852C97.9094 72.651 97.7718 72.748 97.6629 72.788" fill="#634155"/>
<path d="M90.1924 75.0892L89.7338 75.2548C89.7739 75.2948 89.8083 75.369 89.8542 75.3747C90.072 75.3976 90.1752 75.2891 90.181 75.0721L90.1982 75.0892" fill="#634155"/>
<path d="M196.052 73.616L196.213 73.4047C196.127 73.3419 196.023 73.3019 195.92 73.2791C195.869 73.2791 195.817 73.4047 195.76 73.4732L196.052 73.616Z" fill="#FDFDFD"/>
</svg>
              </div>
            </div>
          </div>

          {/* Getting insights section */}
          <div className="bg-[#F2F8FF] rounded-[20px] p-6 mb-4">
            <h2 className="text-[17px] font-semibold leading-[26px] mb-3 text-black">
              Getting useful insights in the app
            </h2>
            <p className="font-semibold text-[12px] leading-[18px] mb-6 text-black">
              Your Nicovape® Q device only uploads its data each time you tap in – the more you tap in, the more
              detailed your usage insights will be over time.
            </p>

            <div className="bg-white rounded-[10px] p-4 mb-4">
              <div className="bg-[#4CAF50] text-white px-4 py-1 rounded-full inline-block text-sm font-medium mb-2 w-fit">
                Recommended
              </div>
              <p className="font-medium text-black">
                Tap in at the start of each new cartridge and at least once a day for detailed insights into your usage.
              </p>
            </div>

            <div className="bg-white rounded-[10px] p-4">
              <div className="bg-[#FFC107] text-white px-4 py-1 rounded-full inline-block text-sm font-medium mb-2 w-fit">
                Minimum
              </div>
              <p className="font-medium text-black">
                Tap in at the start of each new cartridge for simple insight into how long a cartridge is lasting you.
              </p>
            </div>
          </div>

          {/* Device insights section */}
          <div className="bg-[#F2F8FF] rounded-[20px] p-6 mb-4">
            <h2 className="text-[17px] font-semibold leading-[26px] mb-3 text-black">Device insights & alerts</h2>

            <p className="text-[12px] leading-[18px] mb-4 text-black">
              Touch your finger to the USB port to <span className="font-semibold">check battery level</span>. One of
              the following LEDs will display on your device:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <div className="w-[55px] h-[20px] bg-[#32B450] rounded-[10px] mr-3"></div>
                <span className="text-[12px] font-semibold leading-[18px] text-black">50 to 100% charge remaining</span>
              </div>
              <div className="flex items-center">
                <div className="w-[55px] h-[20px] bg-[#FAB414] rounded-[10px] mr-3"></div>
                <span className="text-[12px] font-semibold leading-[18px] text-black">20 to 50%</span>
              </div>
              <div className="flex items-center">
                <div className="w-[55px] h-[20px] bg-[#E64632] rounded-[10px] mr-3"></div>
                <span className="text-[12px] font-semibold leading-[18px] text-black">Below 20%</span>
              </div>
              <div className="flex items-center">
                <div className="w-[55px] h-[20px] bg-[#E64632] rounded-[10px] mr-3"></div>
                <span className="text-[12px] font-semibold leading-[18px] text-black">(flashing) No charge</span>
              </div>
            </div>

            <p className="text-[12px] leading-[18px] mb-4 text-black">
              Hold your finger on the USB port to <span className="font-semibold">check liquid level</span>. One of the
              following LEDs will display after the battery LED:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <div className="w-[55px] h-[20px] bg-[#A732B4] rounded-[10px] mr-3"></div>
                <span className="text-[12px] font-semibold leading-[18px] text-black">Below 20% liquid remaining</span>
              </div>
              <div className="flex items-center">
                <div className="w-[55px] h-[20px] border-2 border-[#DEEDFF] bg-white rounded-[10px] mr-3"></div>
                <span className="text-[12px] font-semibold leading-[18px] text-black">
                  (no LED) More than 20% liquid remaining
                </span>
              </div>
            </div>

            <p className="text-[12px] leading-[18px] mb-3 text-black">Vibration alerts during use:</p>
            <ul className="list-disc pl-5 mb-6">
              <li className="text-[12px] font-semibold leading-[18px] text-black">
                <span className="font-semibold">One pulse:</span> Cartridge is empty (no liquid)
              </li>
              <li className="text-[12px] font-semibold leading-[18px] text-black">
                <span className="font-semibold">Two pulses:</span> Device is out of battery
              </li>
            </ul>

            <div className="bg-[#DEEDFF] p-4 rounded-xl">
              <p className="text-center text-[12px] font-semibold leading-[18px] text-black">
                More detailed insights can be found on your mynicovapeQ dashboard.
              </p>
            </div>
          </div>

          {/* Using your device section */}
          <div className="bg-[#F2F8FF] rounded-[20px] p-6 mb-4">
            <h2 className="text-[17px] font-semibold leading-[26px] mb-3 text-black">Using your Nicovape® Q</h2>

            <p className="text-[12px] leading-[18px] mb-6 text-black">
              The Nicovape® Q is simple and easy to use. It activates automatically when you puff through the mouthpiece
              and enters standby mode when not in use – there are no buttons or manual settings to worry about.
            </p>

            <div className="space-y-6 mb-6">
              <div className="flex">
                <div className="mr-2 font-bold text-[12px] leading-[18px] text-black">1.</div>
                <div>
                  <p className="font-bold text-[12px] leading-[18px] text-black inline">
                    Draw firmly through the mouthpiece for around two seconds
                  </p>
                  <p className="text-[12px] leading-[18px] text-black">
                    – aim to draw enough air through the device to fill your mouth. The device will vibrate gently while
                    it is activated.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-2 font-bold text-[12px] leading-[18px] text-black">2.</div>
                <div>
                  <p className="font-bold text-[12px] leading-[18px] text-black inline">
                    Remove the device from your mouth and inhale deeply, followed by a slow exhalation
                  </p>
                  <p className="text-[12px] leading-[18px] text-black">
                    – wait at least 20 seconds before your next puff. This will enable you to see if you've satisfied
                    your cravings.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#DEEDFF] p-4 rounded-xl">
              <p className="text-[12px] leading-[18px] text-black">
                It's not unusual to experience coughing as you adjust to using a vaping product. This will subside with
                continued use.
              </p>
            </div>
          </div>

          {/* Charging section */}
          <div className="bg-[#F2F8FF] rounded-[20px] p-6 mb-4">
            <h2 className="text-[17px] font-semibold leading-[26px] mb-3 text-black">Charging your Nicovape® Q</h2>

            <p className="text-[12px] leading-[18px] mb-4 text-black">
              Nicovape® Q contains a high-capacity battery that lasts a full day of normal use and takes around 90
              minutes to charge from empty to full.
            </p>

            <p className="text-[12px] font-semibold leading-[18px] mb-4 text-black">
              Only charge your device using the supplied charging cable.
            </p>

            <ol className="space-y-3 mb-4">
              <li className="flex">
                <span className="text-[12px] leading-[18px] text-black mr-1">1.</span>
                <span className="text-[12px] leading-[18px] text-black">
                  Connect the USB-A plug (larger end) to a suitable outlet – max. 5V output (e.g., laptop or car).
                </span>
              </li>
              <li className="flex">
                <span className="text-[12px] leading-[18px] text-black mr-1">2.</span>
                <span className="text-[12px] leading-[18px] text-black">
                  Connect the USB-C plug (smaller end) to your Nicovape® Q device.
                </span>
              </li>
            </ol>

            <p className="text-[12px] leading-[18px] mb-4 text-black">
              Your device LED will pulse white during charging, and will turn off once fully charged.
            </p>

            <div className="bg-[#FFEBEB] p-4 rounded-xl">
              <p className="text-[12px] leading-[18px] text-black">
                If using an adaptor to charge your device via a wall outlet, ensure its output is max. 5V to avoid
                damaging the battery. Wall adaptors commonly output up to 20V and should not be used.
              </p>
            </div>
          </div>

          {/* Maintaining section */}
          <div className="bg-[#F2F8FF] rounded-[20px] p-6 mb-4">
            <h2 className="text-[17px] font-semibold leading-[26px] mb-3 text-black">Maintaining your Nicovape® Q</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-[12px] font-semibold leading-[18px] text-black mb-1">Carrying cartridges</h3>
                <p className="text-[12px] font-semibold leading-[18px] text-black mb-2">
                  Avoid carrying cartridges inside their blister pack where the blister is likely to be pressed in
                  repeatedly (e.g., pockets or purses), as this can create pressure changes inside the blister and may
                  lead to leakage.
                </p>
                <p className="text-[12px] font-semibold leading-[18px] text-black mb-4">
                  If carrying loose cartridges, remove them from the blister pack (keep the silicone plugs in place).
                </p>
              </div>

              <div>
                <h3 className="text-[12px] font-semibold leading-[18px] text-black mb-1">Cleaning</h3>
                <p className="text-[12px] font-semibold leading-[18px] text-black mb-2">
                  When changing to a new cartridge, simply wipe the top connection point of your device with a dry
                  tissue to prevent residue and pocket grit from building up over time.
                </p>
                <p className="text-[12px] font-semibold leading-[18px] text-black mb-4">
                  To clean the device of finger marks and smudges, lightly wet a microfibre cloth with water and wipe
                  the device. Do not use solvents, and do not submerge the device in water.
                </p>
              </div>

              <div>
                <h3 className="text-[12px] font-semibold leading-[18px] text-black mb-1">Storage</h3>
                <p className="text-[12px] font-semibold leading-[18px] text-black mb-2">
                  As with all Lithium-ion battery-powered products, avoid storing your device with an uncharged battery.
                  To preserve battery health, fully charge your device (and remove the cartridge) before storing.
                </p>
                <p className="text-[12px] font-semibold leading-[18px] text-black">
                  Your device and cartridges should be stored safely out of reach of children and pets in a cool, dry
                  place when not in use.
                </p>
              </div>
            </div>
          </div>

          {/* Dashboard button */}
          <button
            onClick={() => router.push("/dashboard")}
            className="w-full bg-indigo-900 text-white rounded-xl py-4 font-medium mb-4"
          >
            Go to my dashboard
          </button>
        </div>
      </div>
    </div>
  )
}
