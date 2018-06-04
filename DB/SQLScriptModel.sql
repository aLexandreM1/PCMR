CREATE TABLE [dbo].[PCS] (
    [PCID]    INT           IDENTITY (1, 1) NOT NULL,
    [Brand]   VARCHAR (50)  NULL,
    [Model]   VARCHAR (50)  NULL,
    [Mobo]    VARCHAR (50)  NULL,
    [RAM]     VARCHAR (50)  NULL,
    [HDD]     VARCHAR (50)  NULL,
    [Process] VARCHAR (50)  NULL,
    [ImgUrl]  VARCHAR (MAX) NULL,
    PRIMARY KEY CLUSTERED ([PCID] ASC)
);