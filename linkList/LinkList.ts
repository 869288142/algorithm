interface LinkInf {
    next: LinkInf | null
}

class Link implements LinkInf {
    constructor(iData : number) {
        this.iData = iData
    }
    next: Link | null = null
    iData: number = 0
}

interface LinkListInf {
    first: LinkInf | null
}

class LinkList implements LinkListInf  {
    first: Link | null = null
    insertFirst(iData: number) {
        let newLink = new Link(iData)
        newLink.next = this.first
        this.first = newLink
    }
    deleteFirst() {
        let temp = this.first
        this.first = this.first?.next ?? null
        return temp
    }
    find(key : number) {
        let cur = this.first
        while(cur !== null) {
            if(cur.iData === key) {
                return cur
            }
        }
        return null
    }
    delete(key : number) {
        let cur = this.first
        let pre = this.first
        while(cur?.iData === key) {
            if(cur.next === null) {
                return null
            }else {
                pre = cur
                cur = cur.next
            }
        }
        if(cur === this.first) {
            this.first = this.first?.next ?? null
        }else {
            if(pre) {
                pre.next = cur?.next ?? null
            }
        }
        return cur
    }

}