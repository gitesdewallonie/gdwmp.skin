from setuptools import setup, find_packages
import os

version = '1.2.dev0'

setup(name='gdwmp.skin',
      version=version,
      description="GDW marmiton & polochon skin",
      long_description=open("README.txt").read() + "\n" +
                       open(os.path.join("docs", "HISTORY.txt")).read(),
      # Get more strings from http://pypi.python.org/pypi?%3Aaction=list_classifiers
      classifiers=[
        "Framework :: Plone",
        "Programming Language :: Python",
        ],
      keywords='gdw marmiton polochon skin',
      author='Affinitic Sprl',
      author_email='info@affinitic.be',
      url='http://svn.affinitic.be/plone/gites/gdwmp.skin',
      license='GPL',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['gdwmp'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          # -*- Extra requirements: -*-
      ],
      entry_points="""
      # -*- Entry points: -*-

      [z3c.autoinclude.plugin]
      target = plone
      """,
      # setup_requires=["PasteScript"],
      # paster_plugins = ["ZopeSkel"],
      )
