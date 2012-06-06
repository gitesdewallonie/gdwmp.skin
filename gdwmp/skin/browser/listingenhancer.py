# -*- coding: UTF-8 -*-

import re
from Acquisition import aq_parent

from Products.Five import BrowserView


class ListingEnhancer(BrowserView):

    def getImageRelatedToContent(self, contentBrain):
        """
        Search for an image linked in the related content
        """
        content = self.context.restrictedTraverse(contentBrain.getPath())
        body = content.CookedBody()
        matchUrl = re.search(r'<img[^<]*src="([^"]*)/image_.*"[^<]*>',
                             body, re.M | re.I)

        if matchUrl:
            imageBaseFolderUrl = aq_parent(content).absolute_url()
            imageUrl = matchUrl.group(1)
            return "%s/%s/image_mini" % (imageBaseFolderUrl, imageUrl)
        else:
            return None
