import { HtmlTag } from './HtmlTag'

/**
 * Anchor tag '<a>'
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
export class AnchorTag extends HtmlTag {
    /**
     * Constructor for AnchorTag class
     *
     * @param string url
     * @param string value
     * @return void
     */
    public constructor(url: string, value: string) {
        super(value)

        if (url && url.length > 0) {
            super.addAttr('href', url)
        }
    }

    /**
     * Get name of the tag
     *
     * @return string
     */
    public getTagName(): string {
        return 'a'
    }

    /**
     * Gets an boolean value whether the tag is self-closing or not
     *
     * @return boolean
     */
    public isSelfClosing(): boolean {
        return false
    }

    /**
     * Gets an boolean value whether the tag is block or not
     *
     * @return boolean
     */
    public isBlock(): boolean {
        return false
    }
}
