import Image from "next/image";

const ASSET_ROOT = "https://assets.dreamlabs.co.kr";

const assets = {
  logo: `${ASSET_ROOT}/brand/worker-host/logos/worker-host-logo.svg`,
  logoWhite: `${ASSET_ROOT}/brand/worker-host/logos/worker-host-logo-white.svg`,
  symbol: `${ASSET_ROOT}/brand/worker-host/logos/worker-host-symbol.svg`,
  worker: `${ASSET_ROOT}/agents/dreamlabs-worker/icon/dreamlabs-bot-icon.png`,
} as const;

type SharedAssetProps = {
  className?: string;
  preload?: boolean;
};

type WorkerHostLogoProps = SharedAssetProps & {
  variant?: "color" | "white";
};

export function WorkerHostLogo({
  className,
  preload = false,
  variant = "color",
}: WorkerHostLogoProps) {
  return (
    <Image
      src={variant === "white" ? assets.logoWhite : assets.logo}
      alt="DreamLabs Worker Host"
      width={720}
      height={192}
      className={className}
      preload={preload}
      sizes="(max-width: 560px) 144px, 184px"
    />
  );
}

export function WorkerHostSymbol({ className }: SharedAssetProps) {
  return (
    <Image
      src={assets.symbol}
      alt=""
      width={256}
      height={256}
      className={className}
      aria-hidden="true"
    />
  );
}

export function WorkerAgentIcon({ className }: SharedAssetProps) {
  return (
    <Image
      src={assets.worker}
      alt=""
      width={1024}
      height={1024}
      className={className}
      aria-hidden="true"
    />
  );
}
