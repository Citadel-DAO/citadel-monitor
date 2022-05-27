import { usePolledQuery } from "../apollo/hooks"
import { LOAD_LOCKS } from "../apollo/queries"
import { Lock } from "../apollo/types"
import { DataText, DataWrapper, ItemsWrapper, ItemWrapper, TitleText } from "../components/Events"
import { ETHERSCAN_URL } from "../constants"


function Locks() {
    const { data, loading, error } = usePolledQuery(LOAD_LOCKS)
    console.log(data)
    if (data) {
        return <ItemsWrapper>
            {data.stakedCitadelLocks.map((lock: Lock) => {
                return <ItemWrapper key={lock.id}>
                    <DataWrapper>
                        <DataText>
                            <a target="_blank" href={`${ETHERSCAN_URL}/address/${lock.user.id}`}>
                                {lock.user.id.substring(0, 5)}
                            </a>
                        </DataText>
                        <TitleText>Account</TitleText>
                    </DataWrapper>
                    <DataWrapper>
                        <DataText>{lock.epoch}</DataText>
                        <TitleText>Epoch</TitleText>
                    </DataWrapper>
                    <DataWrapper>
                        <DataText>{lock.paid}</DataText>
                        <TitleText>Paid</TitleText>
                    </DataWrapper>
                    <DataWrapper>
                        <DataText>{lock.locked}</DataText>
                        <TitleText>Locked</TitleText>
                    </DataWrapper>
                    <DataWrapper>
                        <DataText>{lock.blockNumber}</DataText>
                        <TitleText>Block Number</TitleText>
                    </DataWrapper>
                    <DataWrapper>
                        <DataText>
                            <a target="_blank" href={`${ETHERSCAN_URL}/tx/${lock.id}`}>
                                {lock.id.substring(0, 5)}
                            </a>
                        </DataText>
                        <TitleText>Transaction</TitleText>
                    </DataWrapper>
                </ItemWrapper>
            })}

        </ItemsWrapper>

    }
}
export default Locks