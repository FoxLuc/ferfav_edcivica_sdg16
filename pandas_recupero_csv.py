def cleanDataset(file_name, start):
    import pandas as pd
    #recupero il file excel
    df = pd.read_excel('{}.xlsx'.format(file_name))
    
    #stampo dati iniziali
    print(file_name)
    print("\n{}".format(df.head(5)))
    print("\n{}".format(df.columns))
    
    #rinomino queste colonne altrimenti sono inutilizzabili in Angular
    for i in df.columns:
        if i in ("2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"):
            df = df.rename(columns={"{}".format(i): "Year_{}".format(i)})
    
    #elimino le colonne vuote
    for i in range(start, 52):
        del df['Unnamed: {}'.format(i)]
    #elimino altre colonne inutilizzate
    df = df.drop(columns=["Goal", 'Target','Indicator','SeriesCode','SeriesDescription','Units'])
    
    #stampo dati modificati
    print("\n{}".format(df.head(5)))
    print("\n{}".format(df.columns))
    
    #esporto i dati puliti
    df.to_csv('{}.csv'.format(file_name))

#chiamata del metodo per ogni file excel da pulire
cleanDataset('16.5.2 - bribery incidence', 23)
cleanDataset('16.6.1 - government expenditures', 24)
cleanDataset('16.9.1 - birth certification', 24)