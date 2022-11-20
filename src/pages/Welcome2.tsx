import p2 from 'assets/images/Welcome2.svg'
export const Welcome2: React.FC = () => {
  return (
    <div text-center>
      <img w-128px h-130px src={p2} />
      <h2 text-32px mt-48px>
        每日提醒<br />
        不会遗漏每一笔账单
      </h2>
    </div>
  )
}
