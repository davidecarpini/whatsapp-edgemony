import { FC } from "react"
import { User as UserType } from '../../../../../types'

type Props = {
  user: UserType
}
export const User: FC<Props> = (props) => {
  const { user } = props;
  return (
    <div key={user.id}>
      <img src={user.image} alt={user.name} />
      <p>{user.name}</p>
    </div>
  )
} 