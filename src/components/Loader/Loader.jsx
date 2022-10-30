import { Bars } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled'
 
export const Loader = () => {
        return (
            <Wrapper>
                <Bars
                    height="100"
                    width="500"
                    color="#3f51b5"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
/>
            </Wrapper>
        );
    }