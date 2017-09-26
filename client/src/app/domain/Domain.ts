class Domain {

  constructor(
    public domain: string,
    public method: string,
    public meta: Array<{selector: string, rule?: string, temaplate?: string}>,
    public ts?: string,
    public guid?: string
  ) {  }

}

export default Domain;
