import p3 from 'assets/images/Welcome3.svg'
export const Welcome3: React.FC = () => {
  return (
    <div text-center>
      <img w-128px h-130px src={p3} />
      <h2 text-32px mt-48px>
        数据可视化<br />
        收支一目了然
      </h2>
    </div>
  )
}
