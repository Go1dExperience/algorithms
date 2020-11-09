function domainType(domains: string[]): string[] {
    let result: string[] = [];
    domains.forEach(domain => {
        let seperatedAdd = domain.split(".");
        let domainName = seperatedAdd[seperatedAdd.length - 1];
        switch (domainName) {
            case "org":
                result.push("organizaion");
                break;
            case "com":
                result.push("commercial");
                break;
            case "net":
                result.push("network");
                break;
            case "info":
                result.push("information");
                break;
            default:
                break;
        }
    });
    return result;
}

console.log(
    domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"])
);
