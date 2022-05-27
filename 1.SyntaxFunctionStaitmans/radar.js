
    const getStatus = n => {
        const status = {
            [n > 40]: "reckless driving",
            [n > 20 && n <= 40]: "excessive speeding",
            [n <= 20]: "speeding",
        }

        return status["true"]
    }
 console.log(getStatus(5)) 