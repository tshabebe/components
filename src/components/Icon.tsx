import { icons } from 'lucide-react'

interface Props {
  name: keyof typeof icons
  strokeWidth?: number
  className?: string
}

export const Icon: React.FC<Props> = ({ name, strokeWidth, className }) => {
  const LucideIcon = icons[name]

  return <LucideIcon strokeWidth={strokeWidth} className={className} />
}

export type IconNames = keyof typeof icons
export const iconNames = Object.keys(icons) as IconNames[]

export function UnknownUser() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_78_58)">
        <path
          d="M35.4166 12.2282V12.1134C35.4166 4.61463 29.4746 0 20.9961 0C16.1053 0 12.2174 1.37884 9.10301 3.51361C7.29254 4.75438 7.12955 7.4746 8.45594 9.22514L9.42318 10.5017C10.7496 12.2515 13.1247 12.4178 15.0474 11.3558C16.7996 10.3878 18.5768 9.8638 20.246 9.8638C23.0145 9.8638 24.5721 11.0746 24.5721 13.0364V13.0938C24.5721 15.5746 22.2069 19.1197 15.5157 19.6961L15.2853 19.9556C15.1581 20.0987 15.3186 21.9757 15.6429 24.147L15.9091 25.9175C16.2334 28.0889 18.0597 29.8486 19.9866 29.8486C21.9136 29.8486 23.6316 29.022 23.8213 28.0032C24.0134 26.9837 24.1681 26.157 24.1681 26.157C30.5698 24.5986 35.4166 19.4966 35.4166 12.2282Z"
          fill="#383B3D"
        />
        <path
          d="M18.1064 33.1935C15.9109 33.1935 14.1321 34.9733 14.1321 37.1688V39.0249C14.1321 41.2204 15.9118 43.0002 18.1064 43.0002H21.5194C23.7149 43.0002 25.4946 41.2204 25.4946 39.0249V37.1688C25.4946 34.9733 23.7141 33.1935 21.5194 33.1935H18.1064Z"
          fill="#383B3D"
        />
      </g>
      <defs>
        <clipPath id="clip0_78_58">
          <rect width="43" height="43" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
