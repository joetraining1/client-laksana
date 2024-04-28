export const AdminMenu = [
  {
    id: "dashboard",
    to: "/dashboard",
    title: "Dashboard",
  },
  {
    id: "employees",
    to: "employees",
    title: "Pegawai",
  },
  {
    id: "records",
    to: "records",
    title: "Records",
  },
  {
    id: "payrolls",
    to: "payrolls",
    title: "Payrolls",
  },
  {
    id: "relatives",
    to: "relatives",
    title: "Relatif",
  },
];

export const AdminMenuHeaders = [
  {
    title: "Manajemen Pegawai",
    value: "Mengatur dan mengelola data karyawan.",
    child: {
      title: "Daftar Data Pegawai",
      value: "Keseluruhan karyawan.",
    },
  },
  {
    title: "Manajemen Penggajian",
    value: "Mengatur dan mengelola data penggajian karyawan.",
    child: {
      title: "Daftar Data Penggajian",
      value: "Keseluruhan pembayaran gaji yang dilakukan perusahaan.",
    },
  },
  {
    title: "Manajemen Relatif",
    value: "Mengatur dan mengelola data keluarga karyawan.",
    child: {
      title: "Daftar Keluarga Karyawan",
      value: "Keluarga dari karyawan yang sudah didaftarkan.",
    },
  },
  {
    title: "Manajemen Absensi",
    value: "Mengatur dan mengelola data absensi karyawan.",
    child: {
      title: "Daftar Data Absensi",
      value: "Keseluruhan absensi yang dilakukan karyawan.",
    },
  },
  {
    title: "Dashboard Administrator",
    value: "Pusat kelola aplikasi Datapen:Personalia.",
  },
];
