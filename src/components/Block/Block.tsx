import './Block.css'

interface Props{
    block : string;
    block_class: string;
}

const Block = ({block, block_class}: Props) => {
  return (
    <div className={block_class}>{block}</div>
  )
}

export default Block