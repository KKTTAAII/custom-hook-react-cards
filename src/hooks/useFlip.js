import { useState } from "react";

const useFlip = () => {
    const [state, setState] = useState(true);
    const flipCard = () => {
        setState(flipped => !flipped)
    }
    return [state, flipCard]
}

export default useFlip ;