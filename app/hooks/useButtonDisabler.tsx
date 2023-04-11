import { useEffect } from "react";

const useButtonDisabler = (
  effect: (condition: boolean) => (void | (() => void | undefined)),
  dependency: string
) => {

  useEffect(() => {
    // effect will be setDisabled
    // disabled is false when input field length > 0
    effect(!(dependency.length > 0))
  }, [dependency])
}

export default useButtonDisabler